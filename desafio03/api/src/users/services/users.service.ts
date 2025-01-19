import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/request/create-user/create-user.dto';
import { UpdateUserDto } from '../dto/request/update-user/update-user.dto';
import { ResponseEntity } from 'src/util/response.entity';
import { UserPublicDto } from '../dto/response/user-public/user-public.dto';
import { UserPrivateDto } from '../dto/response/user-private/user-private.dto';
import { UserEntity } from '../entities/user.entity';
import { Prisma } from '@prisma/client';
import { userAge } from './functions/user-ager.function';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { userIdentification, userAddress, userAcademic, userContact } = createUserDto;
      
      const user = await this.prisma.user.create({
        data: {
          ...userIdentification,
          ...userAddress,
          ...userAcademic,
          emergencyContact: {
            create: {
              ...userContact
            }
        }
      }})
      return `http://localhost:3000/users/${user.id}`;
    } catch (erro) {
      if (erro instanceof Prisma.PrismaClientKnownRequestError) {
        const field = erro.meta.target.toString()
        throw new HttpException(`Os campos '${field}' já estão registrados. Não será possível cadastrá-lo novamente, acesse o usuário correspondente.`, HttpStatus.BAD_REQUEST);
      }
    }
  }

  /*paginação*/
  async findAll() {
    let response: UserPublicDto[] = [];
    const users = await this.prisma.user.findMany({
      include: {
        emergencyContact: true
      }
    });

    users.forEach(u => {
      const addingUser = new UserPublicDto(u);
    });

    return response;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        emergencyContact: true
      }
    });

    if (!user) {
      throw new HttpException(`Usuário com ID ${id} não encontrado`, HttpStatus.NOT_FOUND);
    }

    const age = userAge(user.dateOfBirth);

    return new UserPrivateDto(user, age);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto
    })

    if (!user) {
      throw new HttpException(`Usuário com ID ${id} não encontrado`, HttpStatus.NOT_FOUND);
    }

    const age = userAge(user.dateOfBirth);

    return new UserPrivateDto(user, age);
  }

  async remove(id: number) {
    try {
      await this.prisma.user.delete({
        where: { id }
      });
      return;
    } catch {
      throw new HttpException(`Usuário com ID ${id} não encontrado`, HttpStatus.NOT_FOUND);
    }
  }
}


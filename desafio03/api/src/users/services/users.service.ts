import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/request/create-user/create-user.dto';
import { UpdateUserDto } from '../dto/request/update-user/update-user.dto';
import { UserPrivateDto } from '../dto/response/user-private/user-private.dto';
import { userAge } from '../../util/functions/user-ager.function';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserPublicDto } from '../dto/response/user-public/user-public.dto';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
  /*try {*/
      const { userIdentification, userAddress, userAcademic, userEmergencyContact } = createUserDto;
      
      const user = await this.prisma.user.create({
        data: {
          ...userIdentification,
          dateOfBirth: new Date(userIdentification.dateOfBirth),
          ...userAddress,
          ...userAcademic,
          emergencyContact: {
            create: {
              ...userEmergencyContact,
            },
          },
        }});
      return `http://localhost:3000/users/${user.id}`;
   /* } catch (erro) {
      if (erro instanceof Prisma.PrismaClientKnownRequestError) {
        const field = erro.meta.target.toString()
        throw new HttpException(`Os campos '${field}' já estão registrados. Não será possível cadastrá-lo novamente, acesse o usuário correspondente.`, HttpStatus.BAD_REQUEST);
      }
    }*/
  }
async findAll() {
    let response: UserPublicDto[] = [];
    const users = await this.prisma.user.findMany({
      include: {
        emergencyContact: true
      }
    });

    users.forEach(u => {
      const addingUser = new UserPublicDto(u);
      response.push(addingUser)
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
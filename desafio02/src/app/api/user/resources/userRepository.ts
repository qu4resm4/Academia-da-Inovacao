import { PrismaService } from '../../../api/prisma/prisma.service';
import { CreateUserDto } from "./dto/request/create-user/create-user.dto";
import { UpdateUserDto } from './dto/request/update-user/update-user.dto';
import { UserPrivateDto } from './dto/response/user-private/user-private.dto';
import { UserPublicDto } from './dto/response/user-public/user-public.dto';
import { userAge } from './user-ager.function';

export class UsersRepository {

    constructor(private prisma: PrismaService) {}
  
    async create(createUserDto: CreateUserDto) {
        const { userIdentification, userAddress, userAcademic, userContact } = createUserDto;
        return await this.prisma.user.create({
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
    }
  
    /*paginação*/
    async findAll() {
      let response: UserPublicDto[] = [];
      const users = await this.prisma.user.findMany({
        include: {
          emergencyContact: true
        }
      });
  
      users.forEach((u: any) => {
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
        throw new Error(`Usuário com ID ${id} não encontrado`);
      }
  
      return user;
    }
  
    async update(id: number, updateUserDto: UpdateUserDto) {
      const user = await this.prisma.user.update({
        where: { id },
        data: updateUserDto
      })
  
      if (!user) {
        throw new Error(`Usuário com ID ${id} não encontrado`);
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
            throw new Error(`Usuário com ID ${id} não encontrado`);
          }
        
    }
  }
  
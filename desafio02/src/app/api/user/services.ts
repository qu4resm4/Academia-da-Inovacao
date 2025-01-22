import { CreateUserDto } from "./resources/dto/request/create-user/create-user.dto";
import { UpdateUserDto } from "./resources/dto/request/update-user/update-user.dto";
import { UserPrivateDto } from "./resources/dto/response/user-private/user-private.dto";
import { userAge } from "./resources/user-ager.function";
import { UsersRepository } from "./resources/userRepository";

export class UsersService {

    constructor(private userRepository: UsersRepository) {}
  
    async create(createUserDto: CreateUserDto) {
      try {
        
        const user = await this.userRepository.create(createUserDto);
        return `http://localhost:3000/users/${user.id}`;

      } catch (erro) {
        // lançar erro de campo unico já registrado por outro usuário.
      }
    }
  
    /*paginação*/
    async findAll() {
      return this.userRepository.findAll();
    }
  
    async findOne(id: number) {
      const user = await this.userRepository.findOne(id);
  
      const age = userAge(user.dateOfBirth);
  
      return new UserPrivateDto(user, age);
    }
  
    async update(id: number, updateUserDto: UpdateUserDto) {
      const user = await this.userRepository.update(id, updateUserDto);

      const age = userAge(user.dateOfBirth);
  
      return new UserPrivateDto(user, age);
    }
  
    async remove(id: number) {

        return await this.userRepository.remove(id);
    }
  }
  
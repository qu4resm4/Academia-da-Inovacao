import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CreateUserDto } from './dto/request/create-user/create-user.dto';
import { UpdateUserDto } from './dto/request/update-user/update-user.dto';
import { UserPublicDto } from './dto/response/user-public/user-public.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  /*
    - rotas crud contato de emergencia
  */

  /* fazendo este */
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(/*@Query('page') page: number = 1, @Query('limit') limit: number = 10*/) {
    return this.usersService.findAll(/*page, limit*/);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  /* fazer este */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
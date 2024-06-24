import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDto } from 'src/dto/users-manager.dto';
import { User } from 'src/schemas/users.schemas';
import { encodePassword } from 'src/utils/cryptPassword';



@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private UserModel: Model<User>) {}
  
  findAll() {
    return this.UserModel.find();
  }
/*   create(createUser: RegisterDto) {
    const password = encodePassword(createUser.password)
    const createdUser = this.UserModel.create({...createUser, password});
    return createdUser;
  } */

 /*  async findOne(id: string) {
    return this.taskModel.findById(id);
  }
  async delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
  async update(_id: string, task: UpdateTaskDto):Promise<Task> {
    return this.taskModel.findByIdAndUpdate(_id, task, {new:true});
  } */
}

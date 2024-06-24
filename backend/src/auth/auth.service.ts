import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDto, RegisterDto } from 'src/dto/users-manager.dto';
import { User } from 'src/schemas/users.schemas';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  register = async (user: RegisterDto) => {
    const { password } = user;
    const encodePassword = await hash(password, 10);
    user = { ...user, password: encodePassword };
    return this.UserModel.create(user);
  };

  login = async (user: LoginDto) => {
    const { email, password } = user;

    const findUser = await this.UserModel.findOne({ email });
    if (!findUser) throw new HttpException('User not found', 404);

    const comparedPassword = await compare(password, findUser.password);
    if (!comparedPassword) throw new HttpException('Password incorrect', 403);

    const payload = { email: findUser.email, userId: findUser._id };
    const token = await this.jwtService.signAsync(payload, {secret: 'miclavesecreta'});
    const data = {
      user: findUser,
      token,
    };

    return data;
  };
}

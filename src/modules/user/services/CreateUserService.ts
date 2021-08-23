import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';
import { hash } from 'bcrypt';
import authConfig  from '@config/auth';
import { sign } from 'jsonwebtoken';


interface IRequest {
  name: string;
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<IResponse> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPass = await hash(password, 8);

    const user =  usersRepository.create({ name, email, password: hashedPass });

    await usersRepository.save(user);

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id.toString(),
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { user, token };
  }
}

export default CreateUserService;
import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database.js';
import { User } from '../../entities/User.js';
import bcrypt from 'bcryptjs';
import { configs } from '../../config/env.js';
import jwt from 'jsonwebtoken';

const userRepo = AppDataSource.getRepository(User);

const resgister = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await userRepo.findOneBy({ email });
    if (userExists) {
      res.status(409).send({ message: 'Email is already taken' });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = userRepo.create({ name, email, password: hashedPassword });
    await userRepo.save(user);
    res.status(201).send({ message: 'User registered' });
  } catch (error) {
    res.status(500).send({ message: 'Error in creating the user', error });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const userExists = await userRepo.findOneBy({ email });
    if (!userExists || !(await bcrypt.compare(password, userExists.password))) {
      res.status(401).send({ message: 'Login credentials are wrong' });
      return;
    }
    if (!configs.auth.JWT_SECRET) {
      throw new Error('Error in generating token');
    }
    const token = jwt.sign({ userId: userExists.id }, configs.auth.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.status(200).send({ message: 'Login succesfull', token });
  } catch (error) {
    res.status(500).send({ message: 'Error in login the user', error });
  }
};

const profile = (req: Request, res: Response) => {
  res.send('User profile');
};

export default { resgister, login, profile };

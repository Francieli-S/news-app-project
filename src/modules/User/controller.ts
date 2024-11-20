import { Request, Response } from 'express';

const resgister = (req: Request, res: Response) => {
  res.send('User registered');
};

const login = (req: Request, res: Response) => {
  res.send('User loged');
};

const profile = (req: Request, res: Response) => {
  res.send('User profile');
};

export default { resgister, login, profile };

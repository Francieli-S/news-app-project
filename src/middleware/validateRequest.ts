import type { Schema } from 'joi';
import type { Request, Response, NextFunction } from 'express';

export const validateRequest =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      res.status(400).send({ error: error.message });
      return;
    }

    next();
  };

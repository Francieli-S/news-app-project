import Joi from 'joi';

const latestNewsSchema = {
  query: Joi.object({
    q: Joi.string().optional(),
    limit: Joi.number().integer().min(1).max(100).default(5),
    sortBy: Joi.string()
      .valid('relevancy', 'popularity', 'publichedAt')
      .default('publishedAt'),
  }),
};

export default { latestNewsSchema };

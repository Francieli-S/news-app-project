import type { Request, Response } from 'express';
import { fetchNewsApi } from '../../utils.js';

const getLatestNews = async (req: Request, res: Response) => {
  const { q, limit, sortBy } = req.query;
  try {
    const news: unknown = await fetchNewsApi('/everything', {
      q,
      limit,
      sortBy,
    });
    // replace news for news.articles and solve the type error
    res.status(200).send(news);
  } catch (error) {
    res.status(500).send({ message: 'Error in getting the latest new', error });
  }
};

export default { getLatestNews };

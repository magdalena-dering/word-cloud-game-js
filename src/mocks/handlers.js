import { rest } from 'msw';
import data from '../../public/data.json';

export const handlers = [
  rest.get('/data.json', (req, res, ctx) => {
    return res(ctx.json(data));
  }),
];

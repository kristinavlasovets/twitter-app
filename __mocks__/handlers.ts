import { rest } from 'msw';

export const handlers = [
  rest.get('/users', (_req, res, ctx) => {
    const user = [
      {
        name: 'Bob',
        email: 'register@gmail.com',
        phone: '+31636363634',
        password: '111111',
      },
    ];

    return res(ctx.status(200), ctx.json({ user }));
  }),
];

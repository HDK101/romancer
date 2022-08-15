import { User } from '@romancer/models';
import Koa from 'koa';

export default class PostController {
  async index(ctx: Koa.BaseContext, next: () => Promise<any>) {
    ctx.body = await User.create({
      data: {
        email: 'lucas@gmail.com',
        name: 'Lucas',
      }
    });
  }
};

import Koa from 'koa';

export default async (ctx: Koa.BaseContext, next: () => Promise<any>) => {
  console.log(ctx);
  await next();
}

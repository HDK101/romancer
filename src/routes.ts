import Router from '@koa/router';

const router = new Router();

router.get('/', (ctx, next) => { 
  ctx.body = 'HELOLOL';
});

export default router;

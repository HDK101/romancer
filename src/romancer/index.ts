import Koa from 'koa';
import Router from '@koa/router';
import controllerMapper from '@romancer/controllers';

export class Romancer {
  koa: Koa;
  router?: Router;

  constructor({ router }: { router: Router }) {
    this.router = router;
    this.koa = new Koa();

    this.koa.use(router.routes()).use(router.allowedMethods());
  }

  start(port?: number) {
    this.koa.listen(port || 3000);
  }
}

import Koa from 'koa';
import Router from '@koa/router';

class App {
  koa: Koa;
  router?: Router;

  constructor({ router }: { router: Router }) {
    this.koa = new Koa();
    this.router = router;

    this.koa.use(router.routes()).use(router.allowedMethods());
  }

  boot(port: number) {
    this.koa.listen(port || 3000);
  }
}

export default App;


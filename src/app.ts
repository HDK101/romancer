import Koa from 'koa';
import Router from '@koa/router';

import mapControllers from './controllerMapper.js';

class App {
  koa: Koa;
  router?: Router;

  constructor({ router }: { router: Router }) {
    this.koa = new Koa();
    this.router = router;

    this.koa.use(router.routes()).use(router.allowedMethods());
  }

  async boot(port: number, preBoot: () => void, callback: () => void) {
    preBoot();
    this.koa.listen(port || 3000, callback);
  }
}

export default App;


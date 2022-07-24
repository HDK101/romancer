import App from './app.js';
import Router from '@koa/router';
import mapControllers from './controllerMapper.js';

async function mapAll() {
  await mapControllers();
}

export async function load() {
  await mapAll();
}

export class Romancer {
  app?: App;

  static async create() {
    await load();
    return new Romancer();
  }

  start({ router }: { router: Router }) {
    this.app = new App({ router });
    this.app.boot(3000);
  }
}

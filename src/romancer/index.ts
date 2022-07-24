import { Romancer } from './romancer';

async function start() {
  const romancer = await Romancer.create();
  const router = await import(__dirname + '/../routes.js');
  romancer.start({
    router: router.default,
  });
}

start();

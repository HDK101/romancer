import { Romancer } from './romancer';
import bootstrap from '@romancer/bootstrap';

async function start() {
  await bootstrap();

  const { default: router } = await import('./routes');
  
  (new Romancer({
    router,
  })).start(3000);
}

start();

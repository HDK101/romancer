import { controller } from '@romancer/controllers';
import { middleware } from '@romancer/middlewares';
import Router from '@koa/router';

const router = new Router();

router.get('/', middleware('example'), controller('PostController.index'));

export default router;

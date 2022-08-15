import controllerMapper from './mappers/controller';
import middlewareMapper from './mappers/middleware';
import { parseConfig } from './config';

export default async function bootstrap() {
  await parseConfig();
  await controllerMapper();
  await middlewareMapper();
}

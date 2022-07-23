import path from 'path';
import { readdir } from 'fs/promises';

interface Controllers {
  [key: string]: any;
}

const controllers: Controllers = {};

export default async function mapControllers() {
  const data = await readdir('./app/controllers');
  await Promise.all(data.map(async(filename) => {
    const controller = await import(`./app/controllers/${filename}`);
    const nameWithoutExtension = filename?.split('.')[0];
    controllers[nameWithoutExtension] = new controller.default();
  }));
}

export function controller(name: string) {
  const [controller, method] = name.split('.');
  const controllerInstance = controllers[controller];

  console.log(controllerInstance);

  console.log(method);

  console.log(controllerInstance[method]);

  return controllerInstance[method];
}


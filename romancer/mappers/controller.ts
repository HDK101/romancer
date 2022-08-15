import path from 'path';
import { readdir } from 'fs/promises';

import rootDir from '@romancer/utils/rootDir';
import { config } from '@romancer/config';

interface Controllers {
  [key: string]: any;
}

const controllers: Controllers = {};

export default async function map() {
  console.log(path.resolve(rootDir(), String(config.paths.controllers)));

  const controllersFolder = path.resolve(rootDir(), String(config.paths.controllers));
  const data = await readdir(controllersFolder);
  
  await Promise.all(data.map(async(filename) => {
    const controller = await import(`${controllersFolder}/${filename}`);
    const nameWithoutExtension = filename?.split('.')[0];
    controllers[nameWithoutExtension] = new controller.default();
  }));
}

export function controller(name: string): any{
  const [controller, method] = name.split('.');
  const controllerInstance = controllers[controller];

  return controllerInstance[method];
}


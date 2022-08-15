import path from 'path';
import Koa from 'koa';
import { readdir } from 'fs/promises';

import rootDir from '@romancer/utils/rootDir';
import { config } from '@romancer/config';

type MiddlewareFunc = (ctx: Koa.BaseContext, next: Promise<any>) => Promise<any>;

interface Middlewares {
  [key: string]: Koa.Middleware;
}

const middlewares: Middlewares = {};

export default async function map() {
  const folder = path.resolve(rootDir(), String(config.paths.middlewares));
  const data = await readdir(folder);
  
  await Promise.all(data.map(async(filename) => {
    const middleware = await import(`${folder}/${filename}`);
    const nameWithoutExtension = filename?.split('.')[0];
    middlewares[nameWithoutExtension] = middleware.default;
  }));
}

export function middleware(name: string): Koa.Middleware{
  return middlewares[name];
}


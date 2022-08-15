import { readFile } from 'fs/promises';

interface Config {
  paths: {
    models: string | null;
    controllers: string | null;
    middlewares: string | null;
    [pathKey: string]: string | null;
  };
  [key: string]: any;
}

const config: Config = { 
  paths: {
    models: null,
    controllers: null,
    middlewares: null,
  }
};

export async function parseConfig() {
  const data = await readFile('.romancerrc.json', { encoding: 'utf-8' });

  const configData = JSON.parse(data);

  Object.assign(config, configData);

  return config;
}

parseConfig();

export { config };

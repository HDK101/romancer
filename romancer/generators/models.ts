import { readdir } from 'fs/promises';
import path from 'path';
import { Project } from 'ts-morph';
import { parseConfig } from '@romancer/config';

async function generate() {
  console.log('Generating models...');

  const config = await parseConfig();

  const rawFiles = await readdir(path.resolve(String(config.paths.models)));
  const files = rawFiles.filter(file => file !== 'index.d.ts').filter(file => file !== 'index.js');

  const project = new Project({ compilerOptions: { declaration: true, overwrite: true } });
  const sourceFile = project.createSourceFile(path.resolve('.romancer/cache/models.ts'), '', {
    overwrite: true,
  });

  await Promise.all(files.map(async(file) => {
    sourceFile.addStatements(`export { default as ${path.parse(file).name} } from '${`${path.relative(__dirname, path.resolve())}/${config.paths.models}/${path.parse(file).name}`}'`);
  }));

  sourceFile.emit();
}

generate();

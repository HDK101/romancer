import path from 'path';

export default function rootDir(): string {
  return path.resolve(__dirname, '..', '..');
}

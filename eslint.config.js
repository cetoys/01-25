import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.join(__dirname, 'packages/config/eslint.base.cjs');

const config = await import(configPath);

export default config.default ?? config;

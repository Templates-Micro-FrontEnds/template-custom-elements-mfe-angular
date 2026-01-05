import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const [appName, elementName] = process.argv.slice(2);
if (!appName || !elementName) {
  console.log('Uso: node scripts/init.mjs <appName> <elementName>');
  process.exit(1);
}

const root = process.cwd();

const replaceInFile = (file) => {
  const raw = readFileSync(file, 'utf8');
  const next = raw.replaceAll('__APP_NAME__', appName).replaceAll('__ELEMENT_NAME__', elementName);

  if (next !== raw) writeFileSync(file, next, 'utf8');
};

const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === 'dist' || name === '.git') continue;
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (/\.(json|ts|css|html|md)$/.test(p)) replaceInFile(p);
  }
};

walk(root);

console.log('✅ Inicializado:', { appName, elementName });

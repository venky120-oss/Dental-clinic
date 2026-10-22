// Builds the deployable site into dist/: wraps benny-dental.html in a full HTML document and copies img/.
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync } from 'node:fs';

const body = readFileSync('benny-dental.html', 'utf8');
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%231A7A5E'/%3E%3C/svg%3E">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
${body}
</body>
</html>
`;

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
writeFileSync('dist/index.html', html);
cpSync('img', 'dist/img', { recursive: true });
console.log('Built dist/index.html');

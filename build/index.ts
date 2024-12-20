import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import configs from './build.config.json';
import generateFIObject from './generate_fiobject';

const dist_path = path.resolve(__dirname, configs.dist_path);
const bin_path = path.resolve(__dirname, configs.bin_path);
const temp_path = path.resolve(__dirname, configs.temp_path);

console.log(`Cleaning last build...`);
if (fs.existsSync(temp_path)) fs.rmSync(temp_path, { recursive: true });
fs.mkdirSync(temp_path);

if (fs.existsSync(bin_path)) fs.rmSync(bin_path, { recursive: true });
fs.mkdirSync(bin_path);

if (!fs.existsSync(`${bin_path}/icons/`)) fs.mkdirSync(`${bin_path}/icons/`);
console.log(`Done!\n`);

console.log('Installing react-icons package...');
execSync(`bun i react-icons`, { stdio: 'inherit' });
fs.cpSync(`${__dirname}/node_modules/react-icons`, `${temp_path}/react_icons`, { recursive: true });
execSync(`bun uninstall react-icons`, { stdio: 'inherit' });
console.log(`Done!\n`);

console.log(`Unpacking all icons...`);
let export_content = '';
configs.icons.forEach(group => {
    if (fs.existsSync(`${bin_path}/icons/${group}.dart`))
        return console.log(` > Skipping ${group} - already exists`);
    if (!fs.existsSync(`${temp_path}/react_icons/${group}/index.js`))
        return console.log(` > Skipping ${group} - React-icons directory doesn't exist`);

    console.log(` > Installing ${group}...`);
    
    let content = fs.readFileSync(`${temp_path}/react_icons/${group}/index.js`, 'utf8');
    let file = `// THIS FILE IS AUTO GENERATED
library flutter_icons;

import 'package:ultimate_flutter_icons/ficon.dart';

class ${group.toUpperCase()} {
`;

    for (const icon of [...content.matchAll(/function ([a-z]+) ?\([a-z]*\) \{\n? *return GenIcon\((\{.*\})\)/gi)])
        file += `\tstatic const FIconObject ${icon[1]} = ${generateFIObject(JSON.parse(icon[2]))};\n`;
    file += '}';

    fs.writeFileSync(`${bin_path}/icons/${group}.dart`, file.trim());
    export_content += `export 'icons/${group}.dart';\n`;

    console.log(` > Done! `)
});
fs.writeFileSync(`${bin_path}/flutter_icons.dart`, `
// THIS FILE IS AUTO GENERATED
library flutter_icons;

export 'package:ultimate_flutter_icons/ficon.dart';

${export_content}
`.trim());
console.log('Done!\n');

console.log(`Moving to flutter project`);
fs.cpSync(`${bin_path}/icons`, `${dist_path}/icons`, { recursive: true });
fs.cpSync(`${bin_path}/flutter_icons.dart`, `${dist_path}/flutter_icons.dart`, { recursive: true });
console.log('Done!\n');


console.log(`Cleaning up...`);
if (fs.existsSync(temp_path)) fs.rmSync(temp_path, { recursive: true });
if (fs.existsSync(bin_path)) fs.rmSync(bin_path, { recursive: true });
console.log(`Done!\n`);
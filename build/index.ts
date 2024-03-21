import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import configs from './build.config.json';

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
    content = content.replace(`// THIS FILE IS AUTO GENERATED`, '').replace('var GenIcon = require(\'../lib\').GenIcon', '');
    content = content.replace(/module\.exports\.[a-z0-9]+ = function ([a-z0-9]+) \(props\)/gi, 'static SvgPicture $1({double size = 16, Color color = Colors.black})');  
    content = content.replace(/GenIcon\(\{/gi, 'genIcon(({');
    content = content.replace(/\]\}\)\(props\)/gi, ']}), size: size, color: color)');
    content = content.replace(/\};/gi, '}');

    fs.writeFileSync(`${bin_path}/icons/${group}.dart`, `
// THIS FILE IS AUTO GENERATED
library flutter_icons;

import 'package:flutter_icons/gen_icon.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ${group.toUpperCase()} {
${content.trim().replace(/^/gim, '\t')}
}
    `.trim());

    export_content += `export 'icons/${group}.dart';\n`;

    console.log(` > Done! `)
});
fs.writeFileSync(`${bin_path}/flutter_icons.dart`, `
// THIS FILE IS AUTO GENERATED
library flutter_icons;

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
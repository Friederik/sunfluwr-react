#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const repoUrl = 'https://github.com/Friederik/sunfluwr-react.git';

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

function removeGitFolder(dir) {
  const gitPath = path.join(dir, '.git');
  if (fs.existsSync(gitPath)) {
    fs.rmSync(gitPath, { recursive: true, force: true });
  }
}

async function main() {
  const targetDir = process.argv[2] || 'Xx-new-project-xX';
  console.log(`Cloning into ${targetDir}...`);
  run(`git clone --depth=1 ${repoUrl} ${targetDir}`);

  console.log('Removing .git folder...');
  removeGitFolder(targetDir);

  console.log('Installing dependencies');
  run(`cd ${targetDir} && pnpm install`);

  console.log('╭╮ Done!');
  console.log('╰╯ You can shine in', targetDir);
}

main();

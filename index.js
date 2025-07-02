#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

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
  const rawArg = process.argv[2] || 'Xx-new-project-xX';
  const isCurrent = rawArg === '.';
  const targetDir = isCurrent ? process.cwd() : path.resolve(process.cwd(), rawArg);

  run(`git clone --depth=1 ${repoUrl} ${targetDir}`);

  console.log(`Removing ${chalk.red('.git')} folder...`);
  removeGitFolder(targetDir);

  console.log(chalk.green('Installing dependencies'));
  run(`cd ${targetDir} && pnpm install`);

  console.log(chalk.blue('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░'))
  console.log(`╭╮ ${chalk.green('Done!')}`)
  console.log(`╰╯ You can shine like ${chalk.yellow('sunflower')}`)
  console.log(chalk.blue('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░'))
}

main();

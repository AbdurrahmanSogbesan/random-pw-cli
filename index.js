#!/usr/bin/env node

import { Option, program } from 'commander';
import chalk from 'chalk';
import { generate } from 'randomstring';
import boxen from 'boxen';

const usage = chalk.keyword('violet')('-l <length> -c <complexity>\n' + boxen(chalk.green("\n" + "Generates a random password" + "\n"), { padding: 1, borderColor: 'green', dimBorder: true }));

program
  .name(chalk.keyword('violet')('random-pw'))
  .usage(usage)
  .addOption(new Option('-l, --length <length>', 'Length of the password').argParser(parseInt))
  .addOption(new Option('-c, --complexity <complexity>', 'Complexity level of the password').choices(['weak', 'medium', 'strong']).default('medium'))
  .version('1.0.0')
  .parse(process.argv);

const options = program.opts();

if (!options.length) {
  program.help();
}

const complexityMap = {
  weak: 'alphabetic',
  medium: 'alphanumeric',
  strong: ['alphanumeric', '!@#$%^&*()_'],
};

const { complexity } = options;

const password = generate({
  length: options.length,
  charset: complexityMap[complexity],
  readable: true
});

const styledPassword = chalk.bold.green(password);

const messageBox = boxen(`Generated password:\n\n ${styledPassword}`, { padding: 1, borderColor: 'green', dimBorder: true });

console.log(messageBox);

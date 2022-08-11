/* eslint-disable */
const chalk = require('chalk');
const inquirer = require('inquirer');
const slateEnv = require('@shopify/slate-env');
const {event} = require('@shopify/slate-analytics');
const {fetchMainThemeId} = require('@shopify/slate-sync');
const figures = require('figures');
const {argv} = require('yargs');

const question = {
  type: 'confirm',
  name: 'continueWithDeploy',
  message: 'You are about to deploy to the published theme. Continue?',
  default: true,
  prefix: chalk.yellow(`${figures.warning} `),
};

/**
 * Prompt the user to confirm if they are about to deploy to the main theme
 *
 * @param   env   String  The environment to check against
 * @return        Promise Reason for abort or empty resolve
 */
module.exports = async function continueIfPublishedTheme(env) {
  // Always allow this. HACK
  return true;
};

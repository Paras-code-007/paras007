const meow= require('meow')
const {green, yellow, cyan}= require('chalk')
const chalk = require('chalk')

const helptext= `
Usage
${green('npx paras007')} ${cyan('[--options]')} ${yellow('<input>')}

Flags/Options + alias                          ${chalk.dim('Defaults')}
${cyan('--bio')},${cyan(' -b')}         : to display bio,              ${chalk.dim('true')}
${cyan('--projects')},${cyan(' -p')}    : to display projects,         ${chalk.dim('true')}
${cyan('--social')},${cyan(' -s')}      : to display socialHandles,    ${chalk.dim('true')}
${cyan('--fact')},${cyan(' -f')}        : to display funfact,          ${chalk.dim('true')}
${cyan('--debug')},${cyan(' -d')}       : to debug the cli             ${chalk.dim('false')}
${cyan('--minimal')},${cyan(' -m')}     : to show minimal information  ${chalk.dim('false')}
${cyan('--clear')},${cyan(' -c')}       : to clear console before run  ${chalk.dim('false')}
${cyan('--repos')},${cyan(' -r')}       : to display my github repos   ${chalk.dim('false')}
${cyan('--help')}            : for help
${cyan('--version')},${cyan(' -V')}     : for pkg/CLI version

Inputs/Commands
${yellow('help')}              : for help

Examples
use --no-flag or -alias-f to set these flags to false
${green('npx paras007')} ${cyan('--no-social')}
${green('npx paras007')} ${cyan('--social')}
${green('npx paras007')} ${cyan('--no-fact')}
${green('npx paras007')} ${cyan('--fact')}
`

const options= {
    inferType: true, 
    hardRejection: false, 
    flags: {
        bio: {
            type: 'boolean',
            default: true,
            alias: 'b'
        },
        projects: {
            type: 'boolean',
            default: true,
            alias: 'p'
        },
        social: {
            type: 'boolean',
            default: true,
            alias: 's'
        },
        fact: {
            type: 'boolean',
            default: true,
            alias: 'f'
        },
        debug: {
            type: 'boolean',
            default: false,
            alias: 'd'
        },
        version: {
            alias: 'V',
        },
        minimal: {
            type: 'boolean',
            alias: 'm'
        },
        clear: {
            type: 'boolean',
            // default: 'false',
            alias: 'c'
        },
        repos: {
            type: 'boolean',
            default: false,
            alias: 'r'
        }
    }
}

const cli= meow(helptext,options)

module.exports= cli
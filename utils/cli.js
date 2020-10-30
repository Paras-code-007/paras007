const meow= require('meow')
const {green, yellow, cyan}= require('chalk')

const helptext= `
Usage
${green('npx paras007')} ${cyan('[--options]')} ${yellow('<input>')}

Flags/Options + alias
${cyan('--bio')},${cyan(' -b')}           : to display bio, default true
${cyan('--projects')},${cyan(' -p')}      : to display projects, default true
${cyan('--social')},${cyan(' -s')}        : to display socialHandles, default true
${cyan('--fact')},${cyan(' -f')}          : to display funfact, default true
${cyan('--debug')},${cyan(' -d')}         : to debug the cli
${cyan('--minimal')},${cyan(' -m')}         : to show minimal information
${cyan('--clear')},${cyan(' -c')}         : to clear the console before cli run
${cyan('--help')}              : for help
${cyan('--version')},${cyan(' -V')}       : for pkg/CLI version

Inputs/Commands
${yellow('help')}                : for help

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
        }
    }
}

const cli= meow(helptext,options)

module.exports= cli
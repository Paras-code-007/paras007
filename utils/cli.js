const meow= require('meow')
const {green, yellow, cyan}= require('chalk')

//since string is template literal therfore use js in it by using ${}
const helptext= `
Usage
${green('npx paras007')} ${cyan('[--options]')} ${yellow('<input>')}

Flags/Options + alias
${cyan('--bio')},${cyan(' -b')}           : to display bio, default true
${cyan('--projects')},${cyan(' -p')}      : to display projects, default true
${cyan('--social')},${cyan(' -s')}        : to display socialHandles, default true
${cyan('--fact')},${cyan(' -f')}          : to display funfact, default true
${cyan('--debug')},${cyan(' -d')}         : to debug the cli
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
            // type: 'boolean',
            //other properties can be inherited from the default version flag provide by library
            // but still we are writing them
            // default: 'false'
        }//package able to understand that we define an alias for an alredy existing flag
    }
}

const cli= meow(helptext,options)

module.exports= cli
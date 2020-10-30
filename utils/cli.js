const meow= require('meow')

const helptext= `
Usage
npx paras007 [options]

Flags/Options + alias
--bio, -b          : to display bio, default true
--projects, -p     : to display projects, default true
--social, -s       : to display socialHandles, default true
--fact, -f         : to display funfact, default true
--debug, -d           : to debug the cli
--help            : for help
--version, -V         : for pkg version

Examples
use --no-flag or -alias-f to set these flags to false
npx paras007 --no-social
npx paras007 --social
npx paras007 --no-fact
npx paras007 --fact
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
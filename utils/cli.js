const meow= require('meow')

const helptext= `
Usage
npx paras007 [options]

Flags/Options + alias
--bio -b to display bio, default true
--projects -p to display projects, default true
--social -s to display socialHandles, default true
--fact -f to display funfact, default true
--help for help
--version for pkg version

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
        }

    }
}

const cli= meow(helptext,options)

module.exports= cli
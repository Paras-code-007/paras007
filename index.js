#!/usr/bin/env node

const init= require('./utils/init')
const {bio,socialHandles,projects,fact}= require('./utils/data.js')
const alert= require('clialerting')
const meow= require('meow')

const args= process.argv.slice(2) //to get only the flags and inputs and alias to flags

const helptext= `Run npx paras007`
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

;(async ()=>{

    init()
    if(cli.flags.bio) console.log(bio)
    if(cli.flags.projects) console.log(projects)
    if(cli.flags.social) console.log(socialHandles)        
    if(cli.flags.fact) alert({type: 'info', msg: fact, name: 'fun fact'})

    // alert({type: 'info', msg: 'here is cli⬇' })
    // console.log('cli', cli)
    // console.log('cli.flags',cli.flags)
    // console.log('cli.input',cli.input)
    // alert({type: 'success', msg: 'showVersion fn'})
    // console.log(cli.showVersion()) //includes process.exit
    // alert({type: 'success', msg: 'showHelp fn'})
    // console.log(cli.showHelp())  //includes process.exit
    
})()

// --flag1-hel is displayed as flag1Hel (camelcase)
// Parass-MacBook-Air:paras007 parasarora$ paras007 --flag1 --flag2 --no-social
//   flags: { flag1: true, flag2: true, social: false, fact: true },
//if default not mention in meow then the flag will be false
// Parass-MacBook-Air:paras007 parasarora$ paras007 --flag1 --flag2 -s-f
// flags: { flag1: true, flag2: true, social: false, fact: true },

// Parass-MacBook-Air:paras007 parasarora$ paras007 --flag1 --flag2 -sf  //will just include one more flag that is f
//   flags: { flag1: true, flag2: true, social: true, f: true, fact: true },

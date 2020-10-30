#!/usr/bin/env node

const init= require('./utils/init')
const {bio,socialHandles,projects,fact}= require('./utils/data.js')
const cli= require('./utils/cli')
const alert= require('clialerting')

const args= process.argv.slice(2) //to get only the flags and inputs and alias to flags

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
    // console.log(cli.showVersion()) //includes process.exit and show version formpkgjson file and is also executed when provided with a --version flag
    // alert({type: 'success', msg: 'showHelp fn'})
    // console.log(cli.showHelp())  //includes process.exit and show helptext and is also executed when provided with a --help flag
    
})()

// --flag1-hel is displayed as flag1Hel (camelcase)
// Parass-MacBook-Air:paras007 parasarora$ paras007 --flag1 --flag2 --no-social
//   flags: { flag1: true, flag2: true, social: false, fact: true },
//if default not mention in meow then the flag will be false
// Parass-MacBook-Air:paras007 parasarora$ paras007 --flag1 --flag2 -s-f
// flags: { flag1: true, flag2: true, social: false, fact: true },

// Parass-MacBook-Air:paras007 parasarora$ paras007 --flag1 --flag2 -sf  //will just include one more flag that is f
//   flags: { flag1: true, flag2: true, social: true, f: true, fact: true },

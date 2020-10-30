#!/usr/bin/env node

const init= require('./utils/init')
const {bio,socialHandles,projects,fact}= require('./utils/data.js')
const cli= require('./utils/cli')
const debug= require('./utils/debug.js')
const alert= require('clialerting')

const args= process.argv.slice(2)

;(async ()=>{

    cli.input.includes('help') && cli.showHelp(0)  
    init(cli.flags)
    cli.flags.bio && console.log(bio)
    cli.flags.projects && console.log(projects)
    cli.flags.social && console.log(socialHandles)        
    cli.flags.fact && alert({type: 'info', msg: fact, name: 'fun fact'})
    debug(cli.flags.debug, cli.flags, cli.input)

})()

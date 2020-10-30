#!/usr/bin/env node

const init= require('./utils/init')
const {bio,socialHandles,projects,fact}= require('./utils/data.js')
const cli= require('./utils/cli')
const debug= require('./utils/debug.js')
const alert= require('clialerting')

const args= process.argv.slice(2) //to get only the flags and inputs and alias to flags

;(async ()=>{

    init()
    if(cli.flags.bio) console.log(bio)
    if(cli.flags.projects) console.log(projects)
    if(cli.flags.social) console.log(socialHandles)        
    if(cli.flags.fact) alert({type: 'info', msg: fact, name: 'fun fact'})
    debug(cli.flags.debug, cli.input, cli.flags)
})()
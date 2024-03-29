#!/usr/bin/env node

const init= require('./utils/init')
const {bio,socialHandles,projects,fact,headrepo,sbrepo}= require('./utils/data.js')
const cli= require('./utils/cli')
const debug= require('./utils/debug.js')
const stats= require('./utils/stats')
const repos= require('./utils/repos')
const alert= require('clialerting')
// const {prompt, Toggle}= require('enquirer')

const args= process.argv.slice(2)

;(async ()=>{

    cli.input.includes('help') && cli.showHelp(0)  
    init(cli.flags)
    cli.flags.bio && console.log(bio)
    cli.flags.projects && console.log(projects)
    cli.flags.social && console.log(socialHandles)        
    cli.flags.fact && alert({type: 'info', msg: fact, name: 'fun fact'})
    await stats()  //wait for this because has async functions in it therfore need a synchtonous manner execution therofore had to wait here to 
    cli.flags.repos && alert({type: 'info', msg: headrepo, name: sbrepo})
    cli.flags.repos && (await repos())
    debug(cli.flags.debug, cli.flags, cli.input)

})()

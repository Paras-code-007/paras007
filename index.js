#!/usr/bin/env node

const init= require('./utils/init')
const {bio,socialHandles,projects,fact}= require('./utils/data.js')
const cli= require('./utils/cli')
const debug= require('./utils/debug.js')
const alert= require('clialerting')

const args= process.argv.slice(2) //to get only the flags and inputs and alias to flags

;(async ()=>{

    cli.input.includes('help') && cli.showHelp(0)  //by default exit code of show help is 2 but say rightly executed thefore changed exitcode to 0
    // you can use echo $? to check previous command exitcode
    init()
    // Promise.reject(new Error('Unhandled'))  //for checking hard Rejection
    if(cli.flags.bio) console.log(bio)
    if(cli.flags.projects) console.log(projects)
    if(cli.flags.social) console.log(socialHandles)        
    if(cli.flags.fact) alert({type: 'info', msg: fact, name: 'fun fact'})
    debug(cli.flags.debug, cli.flags, cli.input)
})()

// note capital alias are not part 
// we have to mention them too
// blog --tag="one" --tag="two"  //multiple flag  //returns the flag as an array of that data
// if tag flag requires publish flag to be there then we can use function in required which take arguement (flags,input) and if(flag.otherflag) then return true to isRequired
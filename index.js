#!/usr/bin/env node

const init= require('./utils/init')
const {bio,socialHandles,projects,fact,headrepo,sbrepo}= require('./utils/data.js')
const cli= require('./utils/cli')
const debug= require('./utils/debug.js')
const stats= require('./utils/stats')
const repos= require('./utils/repos')
const alert= require('clialerting')
const {prompt, Toggle}= require('enquirer')

const args= process.argv.slice(2)

;(async ()=>{

    const response= await prompt({
        type: 'input',
        name: 'username',
        message: 'what ur username?'
    })
    console.log(response)

    const questions= [
        {
            type: 'input',
            name: 'username',
            message: 'what ur username?'
        },
        {
            type: 'confirm',
            name: 'football',
            message: 'u like football'
        },
    ]
    const response2= await prompt(questions)
    console.log(response2)

    let prompts= new Toggle({
        name: 'likes',
        message: 'like my cli'
    })

    const response3= await prompts.run()
    console.log(response3)

    prompts= new Toggle({
        // name: 'likes',
        message: 'like my cli',
        enabled: 'yes i liked it',
        disabled:  'nah! it was shit'
    })

    const response4= await prompts.run()
    console.log(response4)

    prompts= new Toggle({
        // name: 'likes',
        message: 'tell us about ur class?',
        enabled: '2020',
        disabled:  '2021'
    })

    const isclass2020= await prompts.run()
    console.log('isclass2020',isclass2020)

    // cli.input.includes('help') && cli.showHelp(0)  
    // init(cli.flags)
    // cli.flags.bio && console.log(bio)
    // cli.flags.projects && console.log(projects)
    // cli.flags.social && console.log(socialHandles)        
    // cli.flags.fact && alert({type: 'info', msg: fact, name: 'fun fact'})
    // // await stats()  //wait for this because has async functions in it therfore need a synchtonous manner execution therofore had to wait here to 
    // cli.flags.repos && alert({type: 'info', msg: headrepo, name: sbrepo})
    // cli.flags.repos && (await repos())
    // debug(cli.flags.debug, cli.flags, cli.input)

})()

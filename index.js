#!/usr/bin/env node

const init= require('./utils/init')
const {bio,socialHandles,projects,fact}= require('./utils/data.js')
const alert= require('clialerting')

const args= process.argv.slice(2) //to get only the flags and inputs and alias to flags

;(async ()=>{

    init()
    console.log(bio)
    console.log(projects)
    console.log(socialHandles)
    alert({type: 'info', msg: fact, name: 'fun fact'})

})()
#!/usr/bin/env node

// console.clear()
// console.log(process)
// console.log(process.stdout)
// process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H')
// if we isntall pkg for the same

//clears the console using clear-any-console pkg
// const clearconsole= require('clear-any-console')
// clearconsole()

// use feilds inside pkgjson file by requiring it after all its a json/js file
// const pkgJSON= require('./package.json')
// in nodejs when we require a json file it converts json into js object

// npm i cli-welcome --save-exact
// npm i cli-welcome --save
// to save its exact version or to save it to production dependencies (which are deafults to npm install)


//+ for welcome message use cli-welcome
// console.log(`
// NAME: ${pkgJSON.name}
// VERSION: ${pkgJSON.version}
// DESCRIPTION: ${pkgJSON.description}
// `)

const init= require('./utils/init')
const {bio,socialHandles,projects,fact}= require('./utils/data.js')
const alert= require('clialerting')

const args= process.argv.slice(2) //to get only the flags and inputs and alias to flags

// checkNode('10',{exit: false})

// handling errors like promise rejected when it should not be and we did not provide any catch to handle it
//+ handling errors using cli
// process.on('unhandledRejection',(err)=>{
//     console.log('unhandledRejection')
//     console.log(err.name)
//     console.log(err.message)
//     console.log(err.stack)
// })
// +handling rejection in my way 

// or use package cli-handle-unhandled which use cli-handle-error package to display error properly

// to create error of punhandling promise rejection
// Promise.reject(new Error('this is unhandled'))

//can use this too
// const promise= new Promise(function (resolve,reject) {
//     reject(new Error('This is unhandled'))
// })  



// const social= args.indexOf('--no-social')===-1 ? socialHandles : ``

// console.log(`
// ${social}
// `)

// alerts
// const success= chalk.bold.green
// const info= chalk.bold.hex('#6937FF')
// const warning= chalk.bold.keyword('orange')
// const error= chalk.bold.red

// console.log(`
// ${logSymbols.success}${success(' SUCCESS: ')} Thanks for checking out, like then visit my portfolio
// ${logSymbols.info}${info(' INFO: ')} Studying btech and looking for internships to grow as a developer
// ${logSymbols.warning}${warning(' WARNING: ')} Never underestimate me
// ${logSymbols.error}${error(' ERROR: ')} Invalid request, plz visit my github first 
// `)

// if(args.indexOf('--nofact')=== -1){
//     alert({type: 'info', name: 'fun fact', msg: 'paras is cool'})
// }

// console.log(args)
// alert({type: 'info', name: 'Arguements', msg: args})
// console.log(args.indexOf('--no-social'))
//returns -1 if not found

// console.log(social)  //to check the variable


init()
console.log(bio)
console.log(projects)
console.log(socialHandles)
alert({type: 'info', msg: fact, name: 'fun fact'})
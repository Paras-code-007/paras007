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
const pkgJSON= require('./package.json')
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

const welcome= require('cli-welcome')
const chalk= require('chalk')
const logSymbols = require('log-symbols')
const alert= require('clialerting')
const checkNode= require('node-vercheck')
const unhandled= require('cli-handle-unhandled')

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
unhandled()


welcome({
    title: "paras007",
    tagLine: "run `npx paras007` to get know about me",
    bgColor: `#708090`,
	color: `#000000`,
	bold: true,
	clear: true,
    version: `${pkgJSON.version}`,
    description: pkgJSON.description
})

checkNode('10')

// to create error of punhandling promise rejection
// Promise.reject(new Error('this is unhandled'))

//can use this too
// const promise= new Promise(function (resolve,reject) {
//     reject(new Error('This is unhandled'))
// })  

console.log(`${chalk.cyan.inverse.bold(' Paras Arora - WEB DEVELOPER | AR VR Enthusiast ')}

${chalk.italic(`An aspiring enthusiast 
A key learner, want to gather as much information as i can
`)}
${chalk.keyword('orange').inverse.bold(' Some key Projects: ')}
${chalk.bold.keyword('red')('Shopvela')}: ${chalk.underline.dim('http://shopvela.herokuapp.com/')}

${chalk.bold.underline('Profile links')}
${chalk.inverse.bold.hex('#6cc644')(' Github: ')} ${chalk.dim.underline('https://github.com/Paras-code-007')}
${chalk.inverse.bold.hex('#1da1f2')(' Twitter: ')} ${chalk.dim.underline('https://twitter.com/paras0025')}
${chalk.inverse.bold.hex('#86888a')(' LinkedIn: ')} ${chalk.dim.underline('https://www.linkedin.com/in/paras-arora-343470197/')}
${chalk.bold.bgYellow(' Portfolio: ')} ${chalk.dim.underline('http://parascode007.com')}
`)

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

alert({type: 'info', name: 'fun fact', msg: 'paras is cool'})
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

console.log(`${chalk.cyan.inverse.bold(' Paras Arora - WEB DEVELOPER | AR VR Enthusiast ')}

${chalk.italic(`An aspiring enthusiast 
A key learner, want to gather as much information as i can
`)}
${chalk.keyword('orange').inverse.bold(' Some key Projects: ')}
${chalk.bold.keyword('red')('Shopvela')}: ${chalk.underline('http://shopvela.herokuapp.com/')}

${chalk.bold.underline('Profile links')}
${chalk.inverse.bold.hex('#6cc644')(' Github: ')} https://github.com/Paras-code-007
${chalk.inverse.bold.hex('#1da1f2')(' Twitter: ')} https://twitter.com/paras0025
${chalk.inverse.bold.hex('#86888a')(' LinkedIn: ')} https://www.linkedin.com/in/paras-arora-343470197/
`)



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


console.log(`
NAME: ${pkgJSON.name}
VERSION: ${pkgJSON.version}
DESCRIPTION: ${pkgJSON.description}
`)

console.log(`
Paras Arora - WEB DEVELOPER | AR VR Enthusiast
An aspiring enthusiast 
A key learner, want to gather as much information as i can
Some key Projects:
Shopvela: http://shopvela.herokuapp.com/

Profile links
Github: https://github.com/Paras-code-007
Twitter: https://twitter.com/paras0025
linkedin: https://www.linkedin.com/in/paras-arora-343470197/
`)


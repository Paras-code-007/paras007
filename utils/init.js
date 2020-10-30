const welcome= require('cli-welcome')
const checkNode= require('node-vercheck')
const unhandled= require('cli-handle-unhandled')
const pkgJSON= require('./../package.json')
const boxen= require('boxen')

module.exports= (flags)=>{
    unhandled()

    let clear= flags.clear
    
    !flags.minimal && welcome({
        title: "paras007",
        tagLine: "run `npx paras007` to get know about me",
        bgColor: `#708090`,
        color: `#000000`,
        bold: true,
        clear,
        version: `${pkgJSON.version}`,
        description: pkgJSON.description
    })
    
    flags.minimal && flags.clear && process.stdout.write(process.platform==='win32'? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H' )
    flags.minimal && console.log(`\n${boxen('Paras Arora',{borderStyle: "double", borderColor: "redBright"})}\n`)

    checkNode('10')
   
}
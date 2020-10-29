const welcome= require('cli-welcome')
const checkNode= require('node-vercheck')
const unhandled= require('cli-handle-unhandled')
const pkgJSON= require('./../package.json')


module.exports= ()=>{
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

}
const axios= require('axios')
const apiUrl= 'https://api.github.com/users/Paras-code-007/repos?sort=updated'
const {underline, dim,red, yellowBright,green,yellow, cyanBright}= require('chalk')
const logSymbols = require('log-symbols')
const ora= require('ora')
const handleError= require('cli-handle-error')
const to= require('await-to-js').default

module.exports= async ()=>{
    console.log()
    const spinner = ora({text: ''})
    spinner.start(`${yellow('Repositories:')} fetching from github...`)
    const [err,res]= await to(axios.get(apiUrl))
    // console.log(res)
    handleError('API CALL FAILED',err,true,true)
    spinner.stopAndPersist({symbol: logSymbols.success, text: `${green('REPOSITORIES')}`})
    res.data.map(function (repo) {
        
        console.log(`${cyanBright('name:')} ${yellowBright(repo.name)}
${cyanBright('description:')} ${red(repo.description)}
${cyanBright('url:')} ${dim.underline(repo.html_url)}
${cyanBright('Created at:')} ${dim(repo.created_at.split('T')[0])}
${cyanBright('language:')} ${dim(repo.language)}
`)
    })

}
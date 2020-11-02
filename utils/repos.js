const axios= require('axios')
const apiUrl= 'https://api.github.com/users/Paras-code-007/repos?sort=updated'
const {underline, dim,red, yellowBright,green,yellow, cyanBright}= require('chalk')
const logSymbols = require('log-symbols')
const ora= require('ora')
const handleError= require('cli-handle-error')
const to= require('await-to-js').default
const spinner = ora({text: ''})

module.exports= async ()=>{
    spinner.start(`${yellow('Repositories:')} fetching from github...`)
    const [err,res]= await to(axios.get(apiUrl))
    // console.log(res)
    handleError('API CALL FAILED',err,true,true)
    spinner.stopAndPersist({symbol: logSymbols.success, text: `${green('REPOSITORIES')}`})
    repos= res.data.map(function ({name, description, html_url, created_at, language}) {  //destructed the input object that was passed which was a input object out of as an index of an array of objects
        //use mudule cli-stripHtml to remove html from anything
        return {name, description, html_url, created_at, language}
    })
    // console.log(repos)
    repos.map(function (repo) {
        console.log(`${cyanBright('name:')} ${yellowBright(repo.name)}
${cyanBright('description:')} ${red(repo.description)}
${cyanBright('url:')} ${dim.underline(repo.html_url)}
${cyanBright('Created at:')} ${dim(repo.created_at.split('T')[0])}
${cyanBright('language:')} ${dim(repo.language)}
`)
    })

}


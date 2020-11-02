const {green,yellow}= require('chalk')
const ora= require('ora')
const handleError= require('cli-handle-error')
const to = require('await-to-js').default;
const axios= require('axios');
const chalk = require('chalk');
const logSymbols = require('log-symbols');
const apiUrl= 'https://api.github.com/users/Paras-code-007'

module.exports= async ()=>{
    const spinner = ora({text: ''})
    spinner.start(`${yellow('FOLLOWERS:')} fetching from github...`)
    const [err,res]= await to(axios.get(apiUrl))
    handleError('API CALL FAILED',err,true,true)

    const ghfollower= res.data.followers
    spinner.stopAndPersist({symbol: logSymbols.success, text: `${green('FOLLOWERS:')} ${ghfollower}`})
}
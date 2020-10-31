const {green,yellow}= require('chalk')
const ora= require('ora')
const handleError= require('cli-handle-error')
const to = require('await-to-js').default;
const axios= require('axios');
const chalk = require('chalk');
const apiUrl= 'https://api.github.com/users/Paras-code-007'

module.exports= async ()=>{
    const spinner = ora({text: ''})
    spinner.start(`${yellow('FOLLOWERS:')} fetching from github...`)
    const [err,res]= await to(axios.get(apiUrl)   )
    handleError('API CALL FAILED',err,true,true)  //exit rightaway when got error / no line after this execute
    // console.log(res)
    const ghfollower= res.data.followers
    spinner.succeed(`${green('FOLLOWERS:')} fetched`)
    console.log(`Github Followers: ${ghfollower}
    `)
}
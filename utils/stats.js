const handleError= require('cli-handle-error')
const to = require('await-to-js').default;
const fetch= require('node-fetch')
const axios= require('axios')
const apiUrl= 'https://api.github.com/users/Paras-code-007'

module.exports= async ()=>{
    const [err,res]= await to(axios.get(apiUrl)   )
    handleError('API CALL FAILED',err,true,true)  //exit rightaway when got error / no line after this execute
    // console.log(res)
    const ghfollower= res.data.followers

    console.log(`
Github Followers: ${ghfollower}
    `)
}
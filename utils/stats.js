// const fetch= require('node-fetch')
const axios= require('axios')
const apiUrl= 'https://api.github.com/users/Paras-code-007'

module.exports= async ()=>{
    // const res= await fetch(apiUrl)  //retuens a rreadable stream buffer which is not readable because its a buffer of bytes
    // const data= await res.json()     //turns that to json
    // console.log(data)
    // const ghfollower= data.followers

    const res= await axios.get(apiUrl)   //if not awaited will return a promis but if awaited it will return the data passed to the resolve
    // console.log(res)
    const ghfollower= res.data.followers

    console.log(`
Github Followers: ${ghfollower}
    `)
}
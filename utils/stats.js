const handleError= require('cli-handle-error')
const fetch= require('node-fetch')
const axios= require('axios')
const apiUrl= 'https://api.github.com/users/Paras-code-007'

module.exports= async ()=>{
    // const res= await fetch(apiUrl)  //retuens a rreadable stream buffer which is not readable because its a buffer of bytes
    // const data= await res.json()     //turns that to json
    // console.log(data)
    // const ghfollower= data.followers

    try {
        const res= await axios.get(apiUrl)   //if not awaited will return a promis but if awaited it will return the data passed to the resolve
        // console.log(res)
        const ghfollower= res.data.followers

        console.log(`
Github Followers: ${ghfollower}
        `)
    } catch (err) {
        // console.log(err)

        // console.log(err.name)
        // console.log(err.message)
        // console.log(err.stack)
        //+Or
        handleError('API CALL FAILED',err,true,false)
    }
}

/*
error from fetch in axios
✖ UNHANDLED ERROR
✖ ERROR → Error
ℹ REASON → Request failed with status code 404

error from catch was different
*/
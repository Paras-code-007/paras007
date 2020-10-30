const fetch= require('node-fetch')
const axios= require('axios')
const apiUrl= 'https://api.github.com/users/Paras-code-007'

//Promise implementation
//+using fetch
/*
module.exports= ()=>{
    fetch(apiUrl).then((res)=>{
        // console.log(res)
        // console.log(res.json())  //Promise { <pending> }
        if(res.ok){
            console.log('success')
            return res.json()  
        }else{
            const err= new Error('unhandled error: 404 response')
            console.log('err',err)
        }
        
    }) //Promise { <pending> }
    .then((data)=>{
        // console.log(data)
        console.log(data.followers)
    })
    .catch((err)=>{
        console.log(err)
    })
}
*/

//+using axios
/*
module.exports= ()=>{
    // console.log(axios.get(apiUrl)) //Promise { <pending> }
    axios.get(apiUrl)
    .then((res)=>{
        // console.log(res)
        // console.log(res.data)
        console.log(res.data.followers)
    })
    .catch((err)=>{
        console.log(err.response.status)
    })
}
*/

//async await 
/*
module.exports= async ()=>{
    const res= await fetch(apiUrl)  //earlier it was console logging the thing return by this immidiately therfore we did not get
    const data= await res.json()
    console.log(data)
}
*/

/*
module.exports=async ()=>{
    const res= await axios.get(apiUrl)
    // console.log(res)
    console.log(res.data)
    console.log(res.data.followers)
}
*/


require('dotenv').config();
const {createClient} = require('pexels')
const axios = require('axios');

const pexels_client = createClient(process.env.PEXELS_API_KEY)
const page= 1
const url = `https://api.pexels.com/v1/curated?page=${page}&per_page=40`
const get_photo =  axios.get(url, 
    {
        'Authorization' : process.env.PEXELS_API_KEY
    }).then((res) => {console.log("this is data " + res.data);})
    .catch((error) => {console.error(error.message);})


// pexels_client.photos.show({ id: 2014422 }).then(photo => {
//     console.log(photo.id);
// })


module.exports = {get_photo}
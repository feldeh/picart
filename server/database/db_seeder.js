require('dotenv').config();
const {createClient} = require('pexels')
const axios = require('axios');
const pictures =  require('../model/pictures.model')




    module.exports =  async function fetcher()  {

    let dataArray= []
    const page= 4;
    const url = `https://api.pexels.com/v1/curated?page=${page}&per_page=50`
    console.log('called');
    
        await axios.get(url, 
            {headers : 
                {
                'Authorization' : process.env.PEXELS_API_KEY
                }
            }).then((res) => {
                
                for(picture_index = 1; picture_index < 50; picture_index++ ){
                    let img= res.data.photos;
                    let counter= img[picture_index];
                    if(counter.alt != ''){
                    dataArray.push({url : counter.url, alt: counter.alt})
                    }
                   
                    //console.log('counter.url');
                    
                    //pictures.insertMany(res.data.photos)
                    //console.log("this is data " + res.data.photos[1].url);
                }
                
            
            })
            .catch((error) => {console.error(error.message);})
   
    
    return dataArray;     
 
    
}



// pexels_client.photos.show({ id: 2014422 }).then(photo => {
//     console.log(photo.id);
// })


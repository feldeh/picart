require('dotenv').config();
const { createClient } = require('pexels');
const axios = require('axios');
const pictures = require('../model/pictures.model');

module.exports = async function fetcher() {
  let dataArray = [];
  const page = 8;
  const url = `https://api.pexels.com/v1/curated?page=${page}&per_page=50`;
  console.log('called db utls');

  await axios
    .get(url, {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
    })
    .then(async (res) => {
      for (picture_index = 1; picture_index < 15; picture_index++) {
        let img = res.data.photos;
        let counter = img[picture_index];
        
        if (counter.alt != '') {
            
            const exists = await pictures.findOne({src: counter.src.large})
            console.log('value of exists : ' + exists);
            if(exists == null){
                console.log('current push()' + {src: counter.src.large, alt: counter.alt });
                dataArray.push({src: counter.src.large, alt: counter.alt });
            }
      
        }

        console.log(counter.width);

      }
      pictures.insertMany(dataArray);

    })
    .catch((error) => {
      console.error(error.message);
    });

  return dataArray;
};


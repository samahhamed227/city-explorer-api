'use strict';

const express = require('express') // require the express package
const Server = express() // initialize your express Server instance
const cors = require('cors');
Server.use(cors()) // after you initialize your express Server instance
const  PORT = process.env.PORT
const weather = require('./weather-list.json');
const { response } = require('express');
Server.get('*',(require,response)=>{
    response.send('not found');
})



class forecast{
    constructor(item){
        this.data= item.valid_date ;
        this.description =item.weather.description;

    }
}

// a server endpoint 



Server.get('/get-weather', (request, response) => {
  console.log(request.query.type);
  const CityName = request.query.city_name;
  const lat = request.query.lati;
//   const lon = request.query.lon;
  let searchquery =weatherData.find(item=>{
      if (CityName.toLocaleLowerCase()==item.city_name.toLocaleLowerCase()&& lat==item.lat)
      return item ;
  })
  
  /**
   * using the query we are going to try to find what type of weather user want  from the list of weather 
   * 
   * if we find it, we will return the list of item matching the type
   * if we dont, we will return a message saying it not there
   * By default if the user doesn't provide a query we will send the list as whole
   */
  if (type) {
    const returnArray = weather.filter((item) => {
      return item.type === type;
    });

    if (returnArray.length) {
      response.json(returnArray);
    } else {
      response.send('no data found :disServerointed:')
    }
  } else {
    response.json(weather);
  }
})
try{

    let data;
    let description;
    let newforcase;
    
    let newforcasearray=searchquery.map(item=>{
    // data=item.valid_data;
    // description= item.weather.datascription;
    return new Forcast(item);
    // return newforcase;
})
response.send(newforcasearray)
  }

catch (errors){
response.send("error : the information that you searched for it are not found ");
}


Server.get('/test',(require,response)=>{
    let test ='test';
response.send(test);
}
)

// kick start the express server to work
Server.listen(PORT, () => {
  console.log(`Server started on port${PORT}`);
});
const axios = require('axios');
//Axios is the perfect lib for making HTTP requests 


//Create a driver record through the API.
export function createDriver(
    name, 
    birthdate,
    cpf,
    carmodel,
    status,
    sex,
    callback){
    axios.post('http://192.168.10.10/drivers/new', {
        name: name,
        birthdate: birthdate,
        cpf: cpf,
        carmodel: carmodel,
        status: status,
        sex: sex
      }).then(function (res) {
        console.log(res.data);
        if ( res.status === 200)
            callback(res.data);
      }).catch(function (error) {
        console.log(error);
      });
      
}

//Get a driver record
export function getDriver(id, callback){
    axios.get("http://192.168.10.10/drivers/" + id).then(function (res) {
        callback(res.data);
    })
    .catch( function (error) {
        console.log(error);
    });
}





//TRAVEL REQUESTS
export function createTravel(
    start_location, 
    end_location,
    price,
    driver_id,
    callback){
    axios.post('http://192.168.10.10/travels/new', {
        start_location: start_location, 
        end_location: end_location,
        price: price,
        driver_id: driver_id
      }).then(function (res) {
        console.log(res.data);
        if ( res.status === 200)
            callback(res.data);
      }).catch(function (error) {
        console.log(error);
      });
      
}

//get a travel
export function getTravel(id, callback){
    axios.get("http://192.168.10.10/travels/" + id).then(function (res) {
        callback(res.data);
    })
    .catch( function (error) {
        console.log(error);
    });
}

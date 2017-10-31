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

export function loginDriver(cpf, callback){
    axios.post("http://192.168.10.10/getdriver", {
        cpf: cpf
    }).then(function (res){
        callback(res.data);
    }).catch(function (error){
        console.log(error);
    });
}




//TRAVEL REQUESTS
export function createTravel(
    start_location, 
    end_location,
    price,
    max_lotation,
    driver_id,
    callback){
    axios.post('http://192.168.10.10/travels/new', {
        start_location: start_location, 
        end_location: end_location,
        price: price,
        max_lotation,
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


//PASSENGER REQUESTS

export function createPassenger(
    name, 
    birthdate,
    cpf,
    sex,
    money_balance,
    travel_id,
    callback){
        axios.post('http://192.168.10.10/passengers/new', {
            name: name,
            birthdate: birthdate,
            cpf: cpf,
            sex: sex,
            money_balance: money_balance,
            travel_id: travel_id
          }).then(function (res) {
            console.log(res.data);
            if ( res.status === 200)
                callback(res.data);
          }).catch(function (error) {
            console.log(error);
          });
}
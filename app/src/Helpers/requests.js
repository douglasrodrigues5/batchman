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
            callback();
      }).catch(function (error) {
        console.log(error);
      });
      
}

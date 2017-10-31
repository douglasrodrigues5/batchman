/*
    This module handles all UX functions.
*/
const queryString = require('query-string');

//Disable a div using a given id
export function disableDiv(divID){
    let element = document.getElementById(divID);
    element.className = 'inactive';
}

//Enable a div using a given id
export function enableDiv(divID){
    let element = document.getElementById(divID);
    element.className = 'active';
}

//Set an element value
export function setElementText(elementID, value){
    let element = document.getElementById(elementID);
    element.innerText = value;
}

//Get HTTP params from url. GET method
export function getUrlParam(paramName){
    const url = window.location.search;
    const params = queryString.parse(url);
    
    return params[paramName];
}
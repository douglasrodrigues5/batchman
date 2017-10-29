/*
    This module handles all UX functions.
*/

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
"use strict";
// value - > can be this or that
function printId(id) {
    // if(typeof id === 'string'){
    //     console.log(id.toUpperCase());
    // }else{
    //     console.log(id.toFixed(2));
    // }
}
function describeUser(u) {
    if (u.role === 'Admin') {
        console.log(u.permissions);
    }
    else {
        console.log(u.loyaltyPoints);
    }
}
function usingIn(u) {
    if ('permissions' in u) {
        console.log(u.permissions);
    }
    else {
        console.log(u.loyaltyPoints);
    }
}
// array of unions
const arrayOfUnions = ["a", 1];
const unionOfArray = Math.random() > 0.1 ? ["x", "y"] : [1, 2];

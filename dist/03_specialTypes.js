"use strict";
let title = "intro";
// title = undefined -> Strict null check
let subTitle = undefined;
// void use when function doesn't return a useful value
function log(msg) {
    console.log(msg);
}
function fail(msg) {
    throw new Error(msg);
}
// DO NOT USE ANY TRY TO IGNORE AS MUCH AS POSSIBLE

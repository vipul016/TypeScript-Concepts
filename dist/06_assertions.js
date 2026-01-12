"use strict";
const raw = '{"id": 1, "name": "A"}';
const riskyUser = JSON.parse(raw);
console.log(riskyUser.name);

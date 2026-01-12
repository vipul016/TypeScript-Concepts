// tuples -> fixed length & fixed types 

const userEntry : [string,number] = ['vipul',29]

// optional tuple

type ResponseRow = [status : number, message? : string]

const r11 : ResponseRow = [
    200,
    "hello"
]

const corners : readonly [number,number] = [1,2]
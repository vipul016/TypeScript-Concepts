// interface -> named shape for objects

interface User332 {
    id : string;
    name : string;
    email? : string;
    readonly createdAT : Date
}

const user222 : User332 = {
    id : '1',
    name : 'vipul',
    createdAT: new Date()
}

interface Admin2 extends User332{
    permissions : string[]
}
const admin2 :  Admin2 = {
    id : '1',
    name : 'vipul',
    createdAT: new Date(),
    permissions : ["admin"]
}

interface withMeta{
    meta : {
        active : boolean
    }
}

interface adminWithMeta extends withMeta,Admin2{

}

const vipul23 : adminWithMeta  = {
    id : '1',
    name : 'vipul',
    createdAT: new Date(),
    permissions : ["admin"],
    meta: {
        active : true
    }

}   
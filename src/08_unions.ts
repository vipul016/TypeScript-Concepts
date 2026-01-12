// value - > can be this or that

function printId(id : string | number){
    // if(typeof id === 'string'){
    //     console.log(id.toUpperCase());
    // }else{
    //     console.log(id.toFixed(2));
    // }

}

// object union

type Admin = {
    role : 'Admin',
    permissions : string[],
}

type Customer = {
    role : 'Customer',
    loyaltyPoints : number
}

function describeUser(u: Admin | Customer){
    if(u.role ==='Admin'){
        console.log(u.permissions)
    }else{
        console.log(u.loyaltyPoints)
    }
}

function usingIn(u : Admin | Customer){
    if('permissions' in u){
        console.log(u.permissions);
    }else{
        console.log(u.loyaltyPoints);
    }
}


// array of unions

const arrayOfUnions: (string | number)[] = ["a",1]

const unionOfArray : string[] | number[] = Math.random() > 0.1 ? ["x","y"] : [1,2];


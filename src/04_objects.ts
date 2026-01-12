type User = {
    id : string; // this is required property
    name : string;
    email? : string; // optional email maybe absent but if it's present then it will be a string
    readonly createdAt : Date; // this property can't be reassigned 
}

const user1: User= {
    id : "u1",
    name : "vipul",
    // email : "vipul@gmail.com",
    createdAt : new Date()
}

type User2 = { email? : string}
type User3 = { email : string | undefined}

const user2 : User3 = {
    email : undefined
}

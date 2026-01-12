// value must be everything from A and B

type Inter1 = {
    id: string
}
type Inter2 = {
    createdAt : Date
}

type Entity = Inter1 & Inter2

const e : Entity = {
    id : "1",
    createdAt : new Date()
}

// homework -> create two type one with user  

type NumberHolderUnique = {
    a: number
}
type StringHolderUnique = {
    a : string
}
type NumberStringMix = NumberHolderUnique & StringHolderUnique; 
// const b : NumberStringMix = {
//     a: 124
// }
type Product = {
    id: string,
    title : string
}
type PriceId = {
    price : number
}

type pricedProduct = Product & PriceId
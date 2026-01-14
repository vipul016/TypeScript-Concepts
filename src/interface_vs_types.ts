
// interface -> object shapes that you expect to extend 
// supports declaration merging

//  types more general -> objects, unions, functions, intersactions
// cannot be reopened - no merging

interface Box2 {
    width : number
}
// called declaration merging
interface Box2{
    height : number
}

const boxDemo : Box2 = {
    width: 10,
    height: 20
}

// type Bag = {
//     color : string
// }
// type Bag = {
//     id : number
// }


// ts knows js well
// when you will write the types and when ts will write the types

let count = 0;
const site = "acedevhub"
const score = [10,20,30]

// over annotation isn't bad -> just too much noise

export function add(a: number, b : number) : number{
    return a+b;
}
// you should also annotate when type is not obvious

let maybe : string | number | Boolean;

maybe = Math.random() > 0.5 ? "hello" : 10


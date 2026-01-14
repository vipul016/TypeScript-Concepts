function sumAllNumbers(... xs: number[]): number{
    return xs.reduce((s,n) => s + n, 0);
}

// tuple rest
function makeRange(... args : [start : number,end : number,step?: number]){
    const [start,end, step = 1] = args 
    const out : number[] = []

    for(let i = start;i<=end;i+=step) out.push(i);

    return out
} 

function draw(x : number, y : number){
    console.log(x,y);
}

const points = [10,20]

// draw(... points)  // this is not going to work

const fixedPoints = [10,20] as const

draw(... fixedPoints)
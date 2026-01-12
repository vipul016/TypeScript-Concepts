function func1 (a: number,b : number) : number{
    return a + b
}

const nums12 = [1,2,3]

const doubled  = nums12.map((n)=> n * 2)

const pk = (t: number) => t * 2

type Point = {
    x : number,
    y: number
}

function distanceFromOrigin(p: Point): number{
    return Math.hypot(p.x,p.y)
}


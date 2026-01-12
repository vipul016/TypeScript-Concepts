

const raw = '{"id": 1, "name": "A"}'

const riskyUser = JSON.parse(raw) as {id : number,name : string}

console.log(riskyUser.name)

type User22 = {
    id : number,
    name : string
}

let title : string = "intro"

// title = undefined -> Strict null check

let subTitle : string | undefined = undefined

// void use when function doesn't return a useful value

function log(msg: string) : void {
    console.log(msg)
}

function fail(msg : string) : never {
    throw new Error(msg)
}

// DO NOT USE ANY TRY TO IGNORE AS MUCH AS POSSIBLE


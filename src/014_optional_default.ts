function greetPerson(name? : string ) : string{
    const upperResult = name ? name?.toUpperCase() : "Guest";

    return `Hello ${upperResult}`
}

greetPerson();

function connect(host : string, port? : number ,secure?: boolean){
    const p = port?? 80;
    const s = secure??  false;

    return `Connect ${host} ${p} ${secure}`
}

connect('localhost',80,true)

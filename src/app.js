class hero {
    constructor(name, age, heroClass) {
        this.name = name
        this.age = age
        this.heroClass = heroClass
    }
    exibir() {
        if(this.heroClass == "maga)") {
            console.log(`A ${this.heroClass}, ${this.name} atacou usando magia.`)
        } else if(this.heroClass == "guerreiro") {
            console.log(`O ${this.heroClass}, ${this.name} atacou usando espada.`)
        }else if(this.heroClass == "monge") {
            console.log(`O ${this.heroClass}, ${this.name} atacou usando artes marciais.`)
        }else if(this.heroClass == "ninja") {
            console.log(`A ${this.heroClass}, ${this.name} atacou usando shuriken.`)
        }else {
            console.log(`${this.name} não existe nesse mundo de fantasia`)
        }
        
    }
}

let thami = new hero('Thami', 32, 'maga')
let theo = new hero('Theo', 5, 'guerreiro')
let luis = new hero('Luis', 25, "monge")
let manu = new hero('Manu', 4, 'ninja')

thami.exibir()
theo.exibir()
luis.exibir()
manu.exibir()
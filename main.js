class Ninja {
    constructor(name) {
        this.name = name
        this.health = 10
        this.speed = 3
        this.strength = 3
    }
    sayName() {
        console.log(`Hi! my name is ${this.name}`)
    }
    showStats() {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    }
    drinkShake() {
        this.health += 10 
    }
}

const ninja1 = new Ninja("Hyabusa");
//ninja1.sayName();
//ninja1.showStats();


class Sensei extends Ninja {
    constructor (name) {
        super(name)
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdom() {
        super.drinkShake()
        console.log('Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.')
    }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
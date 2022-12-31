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
ninja1.sayName();
ninja1.showStats();
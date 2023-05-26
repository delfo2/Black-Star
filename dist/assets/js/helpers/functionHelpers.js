export class getRandomNumber {
    constructor() {
        this.lastRandomNumber = 0;
    }
    getRandom(limit) {
        let randomNumber = Math.round(Math.random() * limit);
        if (randomNumber >= limit || randomNumber === this.lastRandomNumber) {
            randomNumber = this.getRandom(limit);
        }
        this.lastRandomNumber = randomNumber;
        return randomNumber;
    }
}
export class AllowChange {
    constructor() {
        this.cartCan = true;
        this.menuCan = true;
    }
    updateCartCan() {
        if (this.cartCan) {
            this.cartCan = false;
        }
        else {
            this.cartCan = true;
        }
    }
    updateMenuCan() {
        if (this.menuCan) {
            this.menuCan = false;
        }
        else {
            this.menuCan = true;
        }
    }
}

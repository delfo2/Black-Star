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
export class TokenGenarator {
    constructor() {
        this.tokenDataBase = [];
    }
    getToken() {
        return this.genarate();
    }
    deleteToken(id) {
        this.tokenDataBase.splice(id, 1);
    }
    genarate() {
        let number = 0;
        while (this.tokenDataBase.includes(number)) {
            number++;
        }
        this.tokenDataBase.push(number);
        return number;
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
export class MathHelp {
    static discount(price, percentage) {
        const discountAmount = (price * percentage) / 100;
        const finalPrice = price - discountAmount;
        return parseFloat(finalPrice.toFixed(2));
    }
}

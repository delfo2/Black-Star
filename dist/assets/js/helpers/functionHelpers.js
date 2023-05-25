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

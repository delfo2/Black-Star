export class getRandomNumber {
    private lastRandomNumber : number = 0;
    
    public getRandom (limit : number) : number {
        let randomNumber = Math.round(Math.random() * limit);

        if(randomNumber >= limit || randomNumber === this.lastRandomNumber) {
            randomNumber = this.getRandom(limit);
        }
        this.lastRandomNumber = randomNumber;
        
        return randomNumber;
    }
}
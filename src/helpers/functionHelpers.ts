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

export class TokenGenarator {
    private tokenDataBase : Number[] = [];

    public getToken () : number {
        return this.genarate();
    }
    public deleteToken (id : number) : void {
        this.tokenDataBase.splice(id, 1);
    }

    private genarate () : number {
        let number = 0;
        while(this.tokenDataBase.includes(number)) {
            number++;
        }
        this.tokenDataBase.push(number);
        return number;
    }
}

export class AllowChange {
    public cartCan = true;
    public menuCan = true;
    
    public updateCartCan () : void {
        if(this.cartCan) {
            this.cartCan = false;
        } else {
            this.cartCan = true;
        }
    }
    public updateMenuCan () : void {
        if(this.menuCan) {
            this.menuCan = false;
        } else {
            this.menuCan = true;
        }
    }
}

export class MathHelp {
    static discount (price : number, percentage : number) : number {
        const discountAmount = (price * percentage) / 100;
        const finalPrice = price - discountAmount;
        return parseFloat(finalPrice.toFixed(2));
    }
}
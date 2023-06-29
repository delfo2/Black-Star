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

    private genarate () : number {
        let number = 0;
        if(this.tokenDataBase.includes(number)) {
            for(let i = 0; this.tokenDataBase.includes(number); i++) {
                number += i;
            }
        }
        this.tokenDataBase.push(number);

        console.log(`Novo Token gerado: ${number}`);
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
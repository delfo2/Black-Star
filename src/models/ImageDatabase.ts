import { getRandomNumber } from "../helpers/functionHelpers.js";

export class ImageDatabase {
    private imgSrcData : string[];
    private randomize = new getRandomNumber();

    constructor (imgSrcData : string[]) {
        this.imgSrcData = imgSrcData;
    }

    public getImgSrcData () : string[] {
        let tempSrcData = this.imgSrcData;
        return tempSrcData;
    }
    
    public getOneSource () : string {
        const randomNumber = this.randomize.getRandom(this.imgSrcData.length);
        const imgSrc = this.imgSrcData[randomNumber];
        return imgSrc;
    }

    public updateSource (src : string) : void {
        this.imgSrcData.push(src);
    }
    public omegaUpdateSource (arrSrc : string []) : void {
        arrSrc.forEach(src => {
            this.imgSrcData.push(src);
        })
    }

}
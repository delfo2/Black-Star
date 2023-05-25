import { getRandomNumber } from "../helpers/functionHelpers.js";
export class ImageDatabase {
    constructor(imgSrcData) {
        this.randomize = new getRandomNumber();
        this.imgSrcData = imgSrcData;
    }
    getImgSrcData() {
        let tempSrcData = this.imgSrcData;
        return tempSrcData;
    }
    getOneSource() {
        const randomNumber = this.randomize.getRandom(this.imgSrcData.length);
        const imgSrc = this.imgSrcData[randomNumber];
        return imgSrc;
    }
    updateSource(src) {
        this.imgSrcData.push(src);
    }
    omegaUpdateSource(arrSrc) {
        arrSrc.forEach(src => {
            this.imgSrcData.push(src);
        });
    }
}

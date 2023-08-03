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
    getSpecificSource(index) {
        if (index > this.imgSrcData.length) {
            return this.imgSrcData[index];
        }
        throw new Error(`o index passado (${index}) é maior que o tamanho do banco de dados.`);
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

import { getRandomNumber } from "../helpers/functionHelpers.js";
export class ProductsDatabase {
    constructor(img) {
        this.products = [];
        this.ramdomize = new getRandomNumber();
        this.titleOptions = {
            tipo: [
                "Camisa", "Camiseta", "Manga Longa", "Blusão"
            ],
            cor: [
                "preto", "branca", "azul", "amarelo", "cinza", "verde", "roxo"
            ],
            colecao: [
                "Primavera 2023",
                "Verão Tropical",
                "Outono Aconchegante",
                "Inverno Gelado",
                "Esportes Radicais",
                "Estampas Florais",
                "Cores Vibrantes",
                "Sustentabilidade Fashion",
                "Vintage Retrô",
                "Tecnologia Têxtil",
                "Arte Urbana",
                "Estilo Minimalista",
                "Glamour Noturno",
                "Colecionadores Clássicos",
                "Moda praia"
            ]
        };
        this.imgs = img;
    }
    getProducts() {
        this.createProducts();
        return this.products;
    }
    createProducts() {
        for (const img of this.imgs.getImgSrcData()) {
            if (img !== '') {
                this.products.push({
                    titulo: this.titleRandomize(),
                    preco: this.precoRandomize() + 10,
                    avaliacao: img.length + this.avaliationRandomize(),
                    srcImg: img,
                    desconto: this.discountRandomize(11)
                });
            }
        }
    }
    avaliationRandomize() {
        return this.ramdomize.getRandom(1000);
    }
    precoRandomize() {
        return this.ramdomize.getRandom(100);
    }
    discountRandomize(preco) {
        const number = this.ramdomize.getRandom(100);
        if (number % 3 === 0) {
            return number;
        }
        return null;
    }
    titleRandomize() {
        let title = '';
        title = this.textAdd(title, this.getRandomText(this.titleOptions.tipo));
        title = this.textAdd(title, this.getRandomText(this.titleOptions.cor));
        title = this.textAdd(title, this.getRandomText(this.titleOptions.colecao));
        return title !== null && title !== void 0 ? title : "Roupa";
    }
    getRandomText(arr) {
        return arr[this.ramdomize.getRandom(arr.length)];
    }
    textAdd(text, add) {
        return text += ` ${add}`;
    }
}

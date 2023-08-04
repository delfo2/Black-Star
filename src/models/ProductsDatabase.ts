import { TokenGenarator, getRandomNumber } from "../helpers/functionHelpers.js";
import { ArrayProductData } from "../interface/ObjProducts.js";
import { ImageDatabase } from "./ImageDatabase.js";

export class ProductsDatabase {
    private imgs : ImageDatabase;
    private products : ArrayProductData[] = [];
    private ramdomize = new getRandomNumber();
    private idGenerator = new TokenGenarator();
    private titleOptions = {
        tipo : [
            "Camisa", "Camiseta", "Manga Longa", "Blusão"
        ],
        cor : [
            "preto", "branca", "azul", "amarelo", "cinza", "verde", "roxo"
        ],
        colecao : [
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
    }
    
    constructor (img : ImageDatabase) {
        this.imgs = img;
    }

    public getOneProduct (index : number) : ArrayProductData {
        if(this.products.length > index) {
            return this.products[index];
        }
        throw new Error('The index provided does not exist.');
    }

    public getProducts () : ArrayProductData[] {
        if(this.products.length < 1) {
            this.createProducts();
        }
        return this.products;
    }

    private createProducts () {
        for (const img of this.imgs.getImgSrcData()) {
            if(img !== '') {
                this.products.push(
                    {
                        id : this.idGenerator.getToken(),
                        titulo : this.titleRandomize(),
                        preco : this.precoRandomize() + 10,
                        avaliacao : img.length + this.avaliationRandomize(),
                        srcImg : img,
                        desconto : this.discountRandomize(11)
                    }
                );
            }
        }
    }

    private avaliationRandomize () : number {
        return this.ramdomize.getRandom(1000);
    }

    private precoRandomize () : number {
        return this.ramdomize.getRandom(100);
    }

    private discountRandomize (preco : number) : null | number {
        const number = this.ramdomize.getRandom(100);
        if(number % 3 === 0) {
            return number;
        }
        return null;
    }

    private titleRandomize () : string {
        let title = '';
        title = this.textAdd(title, this.getRandomText(this.titleOptions.tipo));
        title = this.textAdd(title, this.getRandomText(this.titleOptions.cor));
        title = this.textAdd(title, this.getRandomText(this.titleOptions.colecao));
        
        return title ?? "Roupa";
    }

    private getRandomText (arr : string[]) : string {
        return arr[this.ramdomize.getRandom(arr.length)];
    }

    private textAdd (text : string, add : string) : string {
        return text += ` ${add}`;
    }

}
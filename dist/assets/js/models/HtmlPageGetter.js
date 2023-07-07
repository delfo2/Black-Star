export class HtmlPageGetter {
    constructor() {
        this.winterColection = `
        <div class="estrela__inverno">
            <div class="inverno__container">
                <div class="inverno__textArea">
                    <h3 class="textArea__titulo"><strong>Coleção</strong><br>Inverno 2023</h3>
                    <p class="textArea__descricao">Nosso moletom é flanelado por dentro, por isso é muito mais quentinho e fofo, é uma peça de extrema qualidade, proporcionando conforto e estilo para te aquecer nesse inverno. Os moletons são unissex, possuem capuz e bolsos laterais... assim todos podem ficar quentinhos e formidáveis!</p>
                    <a href="#" class="link">Conferir Coleção  </a>
                </div>
                <img class="inverno__foto-destaque" src="./assets/img/just test images/modelocelb.webp" alt="Homem vestido com camisa jeans aberta em conjunto com calça jeans">
                <div class="inverno__preview">
                    <a href="#" class="preview__cartao"><img src="./assets/img/just test images/inverno1.webp" alt=""></a>
                    <a href="#" class="preview__cartao"><img src="./assets/img/just test images/inverno2.webp" alt=""></a>
                    <a href="#" class="preview__cartao"><img src="./assets/img/just test images/inverno3.webp" alt=""></a>
                    <a href="#" class="preview__cartao"><img src="./assets/img/just test images/inverno4.webp" alt=""></a>
                </div>
            </div>
        </div>`;
        this.hotProducts = `
        <div class="estrela__destaques">
            <div class="destaques__texto">
                <a href="#" class="destaques__titulo"><h3>Destaques</h3></a>
                <a href="#" class="link destaques__link">Ver Mais </a>
            </div>
            <section class="destaques__secao">
                <figure class="secao__card">
                    <img src="./assets/img/just test images/destaques 1.jpg" alt="">
                    <figcaption>RoupaRoupaRoupa</figcaption>
                    <p>R$0,00</p>
                    <button class="link">Adicionar ao Carrinho</button>
                </figure>
                <figure class="secao__card">
                    <img src="./assets/img/just test images/destaques 2.jpg" alt="">
                    <figcaption>Roupa</figcaption>
                    <p>R$0,00</p>
                    <button class="link">Adicionar ao Carrinho</button>
                </figure>
                <figure class="secao__card">
                    <img src="./assets/img/just test images/destaques 3.webp" alt="">
                    <figcaption>Roupa</figcaption>
                    <p>R$0,00</p>
                    <button class="link">Adicionar ao Carrinho</button>
                </figure>
                <figure class="secao__card">
                    <img src="./assets/img/just test images/destaques 4.webp" alt="">
                    <figcaption>Roupa</figcaption>
                    <p>R$0,00</p>
                    <button class="link">Adicionar ao Carrinho</button>
                </figure>
            </section>
        </div>`;
        this.categories = `
        <section class="estrela__categorias">
            <h3 class="categorias__titulo">Categorias</h3>
            <a href="#" class="categorias__card">
                <figure>
                    <img src="./assets/img/just test images/categorias1.webp" alt="">
                    <figcaption>Moletons</figcaption>
                    <p>conheça</p>
                </figure>
            </a>
            <a href="#" class="categorias__card">
                <figure>
                    <img src="./assets/img/just test images/categorias2.webp" alt="">
                    <figcaption>Conjuntos</figcaption>
                    <p>conheça</p>
                </figure>
            </a>
            <a href="#" class="categorias__card">
                <figure>
                    <img src="./assets/img/just test images/categorias3.webp" alt="">
                    <figcaption>Manga Longa</figcaption>
                    <p>conheça</p>
                </figure>
            </a>
            <a href="#" class="categorias__card">
                <figure>
                    <img src="./assets/img/just test images/categorias4.webp" alt="">
                    <figcaption>Camisas</figcaption>
                    <p>conheça</p>
                </figure>
            </a>
        </section>`;
        this.recent = `
        <div class="estrela__destaques">
            <div class="destaques__texto">
                <a href="#" class="destaques__titulo"><h3>Novidades</h3></a>
                <a href="#" class="link destaques__link">Ver Mais </a>
            </div>
            <section class="destaques__secao">
                <figure class="secao__card">
                    <img src="./assets/img/just test images/destaques 1.jpg" alt="">
                    <figcaption>RoupaRoupaRoupa</figcaption>
                    <p>R$0,00</p>
                    <button class="link">Adicionar ao Carrinho</button>
                </figure>
                <figure class="secao__card">
                    <img src="./assets/img/just test images/destaques 2.jpg" alt="">
                    <figcaption>Roupa</figcaption>
                    <p>R$0,00</p>
                    <button class="link">Adicionar ao Carrinho</button>
                </figure>
                <figure class="secao__card">
                    <img src="./assets/img/just test images/destaques 3.webp" alt="">
                    <figcaption>Roupa</figcaption>
                    <p>R$0,00</p>
                    <button class="link">Adicionar ao Carrinho</button>
                </figure>
                <figure class="secao__card">
                    <img src="./assets/img/just test images/destaques 4.webp" alt="">
                    <figcaption>Roupa</figcaption>
                    <p>R$0,00</p>
                    <button class="link">Adicionar ao Carrinho</button>
                </figure>
            </section>
        </div>`;
    }
    getWinterCollection() {
        const tempWinter = this.winterColection;
        return tempWinter;
    }
    getHotProducts() {
        const tempHot = this.hotProducts;
        return tempHot;
    }
    getCategories() {
        const tempCategories = this.categories;
        return tempCategories;
    }
    getRecent() {
        const tempRecent = this.recent;
        return tempRecent;
    }
}

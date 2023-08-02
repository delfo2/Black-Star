export class htmlAllProductsGetter {
    constructor() {
        this.sectionStart = `<section class="all"><div class="all_content">`;
        this.sectionEnd = `</div></section>`;
        this.indice = `
        <div class="all_indice">
            <h2>índice</h2>
            <div class="all_indice-btn">
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>`;
        this.basicArticle = `
        <article class="all_article">
            <img src="./assets/img/just test images/categorias2.webp" alt="">
            <h2>Roupa roupa</h2>
            <h3>R$12,34</h3>
            <div class="all_article-rating">
                <span class="product__card-rating all_rating"></span>
                <p class="all_rating-number">122</p>
            </div>
        </article>`;
        this.promotinalArticle = `
        <article class="all_article">
            <img src="./assets/img/just test images/destaques 1.jpg" alt="">
            <h2>Roupa roupa rouparouparouparouparoupa</h2>
            <div class="all_article-oferta">
                <span class="all_oferta">40% off</span>
                <span class="all_oferta-help">oferta</span>
            </div>
            <h3>R$12,34</h3>
            <span class="all_oferta-preco">R$23,45</span>
            <div class="all_article-rating">
                <span class="product__card-rating all_rating"></span>
                <p class="all_rating-number">122</p>
            </div>
        </article>`;
    }
    getSStart() {
        return this.sectionStart;
    }
    getSEnd() {
        return this.sectionEnd;
    }
    getIndice() {
        return this.indice;
    }
    getBArticle() {
        return this.basicArticle;
    }
    getPArticle() {
        return this.promotinalArticle;
    }
}

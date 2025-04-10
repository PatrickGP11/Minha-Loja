var produtos = [
    {
        img: "https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_7012caa2-a8cc-4fa3-8978-3f626b507f1c_540x.jpg?=75&v=1708686620",
        titulo: "Nike Air Max TN",
        preco: "R$ 899,00",
        descricao: "Eleve seu estilo com o clássico reinventado. Conforto supremo encontra design inovador"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_7012caa2-a8cc-4fa3-8978-3f626b507f1c_540x.jpg?=75&v=1708686620",
        titulo: "Nike Air Max TN",
        preco: "R$ 899,00",
        descricao: "Eleve seu estilo com o clássico reinventado. Conforto supremo encontra design inovador"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_7012caa2-a8cc-4fa3-8978-3f626b507f1c_540x.jpg?=75&v=1708686620",
        titulo: "Nike Air Max TN",
        preco: "R$ 899,00",
        descricao: "Eleve seu estilo com o clássico reinventado. Conforto supremo encontra design inovador"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_7012caa2-a8cc-4fa3-8978-3f626b507f1c_540x.jpg?=75&v=1708686620",
        titulo: "Nike Air Max TN",
        preco: "R$ 899,00",
        descricao: "Eleve seu estilo com o clássico reinventado. Conforto supremo encontra design inovador"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_7012caa2-a8cc-4fa3-8978-3f626b507f1c_540x.jpg?=75&v=1708686620",
        titulo: "Nike Air Max TN",
        preco: "R$ 899,00",
        descricao: "Eleve seu estilo com o clássico reinventado. Conforto supremo encontra design inovador"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_7012caa2-a8cc-4fa3-8978-3f626b507f1c_540x.jpg?=75&v=1708686620",
        titulo: "Nike Air Max TN",
        preco: "R$ 899,00",
        descricao: "Eleve seu estilo com o clássico reinventado. Conforto supremo encontra design inovador"
    },
]

var divProduto = document.querySelector(".produtos")

for(var i = 0; i < produtos.length; i++) {
    divProduto.innerHTML += `<div class="card">
                <img src="${produtos[i].img}" alt="#">
                <div class="content">
                    <div class="title">
                        <h2>${produtos[i].titulo}</h2>
                        <p>${produtos[1].descricao}</p>
                    </div>
                    <div class="btns">
                        <p>${produtos[i].preco}</p>
                        <button>Comprar agora</button>
                    </div>
                    <div class="freight">
                        <i class="fa-solid fa-truck-fast"></i>
                        <p>Frete grátis para todo o Brasil</p>
                    </div>
                </div>
            </div>`
}
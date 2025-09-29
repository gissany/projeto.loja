const produtos = [
    {id:1, nome: "Camisa", preco: 59.90, imagem: "imagem/camisa.jpeg"},
    {id:2, nome: "Vestido", preco: 100.00, imagem: "imagem/vestido-1.jpg"},
    {id:3, nome: "Short", preco: 79.90, imagem: "imagem/short.jpg"},
    {id:4, nome: "Caneca", preco: 39.90, imagem: "imagem/caneca.jpg"},
    {id:5, nome: "Calça Jeans", preco: 120.00, imagem: "imagem/calca-jeans.jpg"},
    {id:6, nome: "Blusa", preco: 89.90, imagem: "imagem/blusa.jpg"},
];

const produtosContainer = document.getElementById("produtos");

//renderizando produtos ditaticamente 
produtos.forEach(produto =>{
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <img src="${produto.imagem}" alt"${produto.nome}" class="produto-img">
    <h3>${produto.nome} </h3>
    <p>${produto.preco.toFixed(2)}</p>
    <button class= "btn-add" data-id = "${produto.id}"> Adicionar </button>
    
    `;
    produtosContainer.appendChild(card);
});

//adicionando produtos no carrinho
document.addEventListener("click", (e) =>{
    if (e.target.classList.contains("btn-add")){
        const id = parseInt(e.target.dataset.id);
        const produto = produtos.find(p => p.id === id);

        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        carrinho.push(produto);
        localStorage.setItem("carrinho", JSON.stringify(carrinho))

        //mensagem temporária

        const mensagem = document.createElement("div");
        mensagem.classList.add("mensagem");
        mensagem.textContent = `${produto.nome} Adicionado ao carrinho!`;
        document.body.appendChild(mensagem);

        setTimeout(() => mensagem.remove(), 2000);
    }
});



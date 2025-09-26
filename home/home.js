const produtos = [
    {id:1, nome: "Camisa", preco: 59.90, imagem: "imagem/camisa.jpeg"},
    {id:2, nome: "Vestido", preco: 100.00, imagem: "imagem/vestido-1.jpg"},
    {id:3, nome: "Short", preco: 79.90, imagem: "imagem/short.jpg"},
    {id:4, nome: "Caneca", preco: 39.90, imagem: "imagem/caneca.jpg"},
    {id:5, nome: "Calça Jeans", preco: 120.00, imagem: "imagem/calca-jeans.jpg"},
    {id:6, nome: "Blusa", preco: 89.90, imagem: "imagem/blusa.jpg"},
];

const produtosContainer = document.getElementById("produtos");

produtos.forEach(produto =>{
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <img scr="${produto.imagem}" alt"${produto.nome}" class="produto-img">
    <h3>${produto.nome} </h3>
    <p>${produto.preco.toFixed(2)}</p>
    
    `
})
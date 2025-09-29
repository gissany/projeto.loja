let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
const itensCarrinho = document.getElementById("itens-carrinho");
const total = document.getElementById("total");

function atualizarCarrinho(){
    itensCarrinho.innerHTML = "";
    let soma = 0;

    carrinho.forEach((item, i)=>{
        soma += item.preco;

        const li = document.createElement("li");
        li.innerHTML = `
        &{item.nome} - R$ ${item.preco.toFixed(2)}
        <button class= "btn-remove" data-index=${i}">
        <i class="fa-solid fa-xmark"></i>
        </button>
        
        
        `;

        itensCarrinho.appendChild(li);
    });

    total.textContent = `Total: R$ ${soma.toFixed(2)}`;
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    
}
itensCarrinho.addEventListener("click", (e) =>{
    const botao = e.target.closest("btn-remove"); //pegando o botão
})
atualizarCarrinho();

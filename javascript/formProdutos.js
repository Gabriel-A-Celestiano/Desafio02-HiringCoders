//Cadastro produtos
const formProdutos = document.getElementById("form-produtos");

formProdutos.addEventListener("submit", (e) => {
    e.preventDefault();

    let nomeProduto = document.getElementById("nome-produto").value;
    let codigoProduto = document.getElementById("codigo-produto").value;
    let quantidadeProduto = document.getElementById("quantidade-produto").value;

    let produto = {
        nomeProduto,
        codigoProduto,
        quantidadeProduto,
    }

    let convertData = JSON.stringify(produto);

    localStorage.setItem("cadastroProduto", convertData);

    alert("Produto cadastrado com sucesso!");
    location.reload();
});
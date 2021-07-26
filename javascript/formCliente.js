// Cadastrando cliente
const formCliente = document.getElementById("form-cliente");

formCliente.addEventListener("submit", (e) => {
    e.preventDefault();

    let nome = document.getElementById("nome-cliente").value;
    let email = document.getElementById("email").value;
    let endereco = document.getElementById("endereco").value;

    let cliente = {
        nome,
        email,
        endereco,
    }

    let convertData = JSON.stringify(cliente);

    localStorage.setItem("cadastroCliente", convertData);

    alert("Cliente cadastrado com sucesso!");
    location.reload();
});
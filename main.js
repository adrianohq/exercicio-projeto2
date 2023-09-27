const form = document.getElementById('form-contatos');
const nome = [];
const numero = [];

let linhas = '';

function formatarTelefone(numero) {
    if (numero.length === 11) {
    return `(${numero.substring(0, 2)}) ${numero.substring(2, 7)}-${numero.substring(7, 11)}`;
    }

    return numero;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    
    if(nome.includes(inputNomeContato.value)) {
        alert(`O contato "${inputNomeContato.value}" já foi cadastrado!`)
    } else {
        nome.push(inputNomeContato.value);
        numero.push(parseInt(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${formatarTelefone(inputNumeroContato.value)}</td>`;
        linha += `</tr>`

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


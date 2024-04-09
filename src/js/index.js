/*
Olá Mundo!
    Objetivo 1 - Quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        *Passo 1* - Pegar o botão mostar mais no JS para pçoder verificar quando o usuário clicar em cima dele

        *Passo 2* - identificar o clique no botão

        *Passo 3* - adicionar a classe ativo nos projetos escondidos

    Objetivo 2 - esconder o botão de mostrar mais

        *Passo 1* - pegar o botão e esconder ele

*/
//Objetivo 1 - Quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

       // *Passo 1* - Pegar o botão mostar mais no JS para pçoder verificar quando o usuário clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();

    EsconderBotão();
});

function EsconderBotão() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');


    });
}

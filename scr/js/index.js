const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', ()=>{
      
        desativaoBotaoSelecionado();
      
      seleconarBotaocarrossel(botao);

      esconderImagemAtiva();

       mostrarImagemDeFundo(indice); 

    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function seleconarBotaocarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativaoBotaoSelecionado() {
    const botaoselecionado = document.querySelector('.selecionado');
    botaoselecionado.classList.remove('selecionado');
}

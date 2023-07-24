// comentário em linha 
//alert('olá');
/*comentário em bloco*/

//console.log('ola')
//console.log(document)
//console.log(document.getElementById('ciclope'))
//const itemciclope =  document.getElementById('ciclope');
//console.log(itemciclope);
//console.log(document.querySelectorAll('.personagem'));
const personagens = document.querySelectorAll('.personagem');
//console.log(personagens)
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        //uabilidade no celular onde não tem o mouse
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removerSelecaoDoPersonagem();
        //console.log(personagem.classList)
        personagem.classList.add('selecionado')

        alterarImagemPersonagemSelecionado(personagem);

        alterarNomePersonagemSelecionado(personagem);
        //console.log();
        alterarDescricaoPersonagem(personagem);

    })
})


function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    //console.log(imagemPersonagemGrande);
    const idPersonagem = personagem.attributes.id.value;
    //console.log(idPersonagem);
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    //console.log(personagemSelecionado);
    personagemSelecionado.classList.remove('selecionado');
}
//só funciona em elemento unico
/*
personagens.addEventListener('click',() => {
    console.log('clicou');
})*/













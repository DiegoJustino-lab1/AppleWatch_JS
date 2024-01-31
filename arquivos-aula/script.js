const imagemVisualizacao= document.getElementById("imagem-visualizacao");
const nomeCorSelecionada=document.getElementById("nome-cor-selecionada");
const tituloProduto= document.getElementById("titulo-produto");


const verdeCipreste = {
nome: "Verde-cipreste",
pasta:"imagens-verde-cipreste"
}

const azulInverno={
nome: "Azul Inverno",
pasta:"imagens-azul-inverno"
}

const meiaNoite={
nome: "Meia Noite",
pasta:"imagens-meia-noite"
}

const estelar={
nome: "Estelar",
pasta:"imagens-estelar"
}

const rosaClaro={
nome: "Rosa Claro",
pasta:"imagens-rosa-claro"
}

const opcoesCores= [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho= ["41mm", "45mm"];
const miniaturaImagem0=document.getElementById("0-imagem-miniatura");
const miniaturaImagem1=document.getElementById("1-imagem-miniatura");
const miniaturaImagem2=document.getElementById("2-imagem-miniatura");
let tamanhoSelecionado= 1;
let imagemSelecionada= 1;
let corSelecionada=1;

function atualizarImagemSelecionada(){
    const idOpcaoSelecionada = document
    .querySelector('[name="opcao-imagem"]:checked').id;
   imagemSelecionada= idOpcaoSelecionada.charAt(0);
   imagemVisualizacao.src= './imagens/opcoes-cores/imagens-azul-inverno/imagem-'+ imagemSelecionada+'.jpeg';

}

function atualizarTamanho(){
    const opcaoTamanhoSelecionado = document
    .querySelector('[name="opcao-tamanho"]:checked')
    .id.charAt(0);
    tamanhoSelecionado= opcaoTamanhoSelecionado;
    tituloProduto.innerText=
    "Pulseira loop esportiva " +
    opcoesCores[corSelecionada].nome +
    opcoesTamanho[tamanhoSelecionado];

    if(opcoesTamanho[tamanhoSelecionado]==="41mm"){

        imagemVisualizacao.classList.add("caixa-pequena");
    }else{
        imagemVisualizacao.classList.remove("caixa-pequena");
    }
}


function atualizarCorSelecionada(){
    const opcaoCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada= opcaoCorSelecionada.charAt(0);
    tituloProduto.innerText= "Pulseira loop esportiva"+" "+ opcoesCores[corSelecionada].nome.toLocaleLowerCase()+ " para caixa de "+ " "+ opcoesTamanho[tamanhoSelecionado];
       
    nomeCorSelecionada.innerText= 'Cor - '+ opcoesCores[corSelecionada].nome;
    miniaturaImagem0.src = './imagens/opcoes-cores/'+opcoesCores[corSelecionada].pasta +'/imagem-0.jpeg';
    miniaturaImagem1.src = './imagens/opcoes-cores/'+opcoesCores[corSelecionada].pasta +'/imagem-1.jpeg';
    miniaturaImagem2.src = './imagens/opcoes-cores/'+opcoesCores[corSelecionada].pasta +'/imagem-2.jpeg';

    imagemVisualizacao.src= './imagens/opcoes-cores/'+opcoesCores[corSelecionada].pasta +'/imagem-'+ imagemSelecionada+'.jpeg';

}       



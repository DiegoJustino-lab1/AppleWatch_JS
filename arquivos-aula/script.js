
const verdeCipreste= {
nome: "Verde-cipreste",
nomePastaImagens:"imagens-verde-cipreste",
};

const azulInverno={
nome: "Azul Inverno",
nomePastaImagens:"imagens-azul-inverno",
};

const meiaNoite={
nome: "Meia Noite",
nomePastaImagens:"imagens-meia-noite",
};

const estelar={
nome: "Estelar",
nomePastaImagens:"imagens-estelar",
};

const rosaClaro={
nome: "Rosa Claro",
nomePastaImagens:"imagens-rosa-claro",
};


const tituloProduto= document.getElementById("titulo-produto");
const imagemVisualizacao= document.getElementById("imagem-visualizacao");
const nomeCorSelecionada=document.getElementById("nome-cor-selecionada");
const opcoesCores= [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho= ["41mm", "45mm"];
const opcaoImagem0=document.getElementById("0-imagem-miniatura");
const opcaoImagem1=document.getElementById("1-imagem-miniatura");
const opcaoImagem2=document.getElementById("2-imagem-miniatura");
let tamanhoSelecionado= 1;
let imagemSelecionada= 1;
let corSelecionada=1;


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

function atualizarImagemSelecionada(){
    const opcaoImagemSelecionada = document
    .querySelector('[name="opcao-imagem"]:checked')
    .id.charAt(0);
   imagemSelecionada= opcaoImagemSelecionada;

   imagemVisualizacao.src ="./imagens/opcoes-cores/" + opcoesCores[corSelecionada].nomePastaImagens+ "/imagem-" + imagemSelecionada+ ".jpeg";  
}

function atualizarCorSelecionada(){
    const numeroCorSelecionada= document
    .querySelector('[name="opcao-cor"]:checked')
    .id.charAt(0);
    corSelecionada= numeroCorSelecionada;

    tituloProduto.innerText=
    "Pulseira loop esportiva " +
     opcoesCores[corSelecionada].nome.toLocaleLowerCase() +
      "para caixa de" +
      opcoesTamanho[tamanhoSelecionado];

    // Atualizar as imagens de visualização e miniatura
    opcaoImagem0.src=
    "./imagens/opcoes-cores/" +
     opcoesCores[corSelecionada].nomePastaImagens +
      "/imagem-0.jpeg";

    opcaoImagem1.src=
    "./imagens/opcoes-cores/" +
     opcoesCores[corSelecionada].nomePastaImagens +
    "/imagem-1.jpeg";

    opcaoImagem2.src=
    "./imagens/opcoes-cores/" +
    opcoesCores[corSelecionada].nomePastaImagens +
    "/imagem-2.jpeg";

    imagemVisualizacao.src=
      "./imagens/opcoes-cores/" +
      opcoesCores[corSelecionada].nomePastaImagens +
      "/imagem-" +
      imagemSelecionada +
      ".jpeg";

    nomeCorSelecionada.innerText= "Cor -" +opcoesCores[corSelecionada].nome;
}
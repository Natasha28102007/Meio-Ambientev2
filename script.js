const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Por que tempoluição ?",
        alternativas: [
            {
                texto: "O ser humano provoca poluição ambintal quano uas inrutria, por exmplo lançam poluente no ar",
                afirmacao: "Meio ambiente é o conjunto de elementos, processos e dinâmicas biológicos, fisícos e químicos."
            },
            {
                texto: "A poluição não caua mau ao seres humanos",
                afirmacao: "Criam condições e mantêm a vida no planeta terra."
            }
        ]
    },
    {
        enunciado: "Como preservar árvores e florestas ?",
        alternativas: [
            {
                texto: "reutilizando metais e vidros",
                afirmacao: "Os seres humanos e as dinâmicas sociais, culturais e econômicas."
            },
            {
                texto: "reciclando papeis, jornais e revistas",
                afirmacao: "O meio ambiente é composto pela biosfera, hidrosfera, atmosfera e litosfera."
            }
        ]
    },
    {
        enunciado: "Derrubar árvore contribuir para as cidades tornarem-se mais quentes ?",
        alternativas: [
            {
                texto: "Verdadeiro",
                afirmacao: "A preservação do meio ambiente faz parte dos temas transversais presentes no parâmetros corriculares nacionais."
            },
            {
                texto: "Falso",
                afirmacao: "O seu objetivo é incitar nos estudantes a importância de preservar o meio ambiente e os problemas causados pela intervenção humana na natureza."
            }
        ]
    },
    {
        enunciado: "O meio ambiente, bem de uso comum do povo, consistente no equilibrio ecológico e na higidez do meio e dos, recursos naturais, é bem ?",
        alternativas: [
            {
                texto: "comum, geral, difuso, indivisivel, indisponivel e impenhorável",
                afirmacao: "Os termos preservação e conservação ambiental são constantemente confundidos."
            },
            {
                texto: "Coletivo, divisivel e indisponivel",
                afirmacao: "É a proteção sem a intervenção humana significa a natureza intocável."
            }
        ]
    },
    {
        enunciado: "Como diminuir as queimadas ",
        alternativas: [
            {
                texto: "Nunca provoque queimadas para eliminar lixo ou limpar terrenos.",
                afirmacao:"É a proteção com uso racional da natureza, através do manejo sustentável."
            },
            {
                texto: "Atear fogo na área de vegetação ou roçado",
                afirmacao: "Permite a presença do homem na natureza, porém, de maneira harmônica."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

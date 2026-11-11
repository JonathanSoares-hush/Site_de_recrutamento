// const é para declarar variáveis constantes, ou seja, que não iraõ ter seus valores alterados


// document é a página inteira HTML. É como o JavaScript enxerga o DOM 


// querySlector busca pelo id ou classe do elemento e devolve o primeiro que encontrar


const formulario = document.querySelector("#formulario");
// .value traz somente o valor que foi digitado no campo, sempre como texto(mesmo que seja número)


function lerFormulario() {
    return {
        codinome: document.querySelector("#codinome").value,
        nome: document.querySelector("#nome").value,
        idade: document.querySelector("#idade").value,
        poder: document.querySelector("#poder").value,
        ingresso: document.querySelector("#ingresso").value,
        email: document.querySelector("#email").value,
    }
}


function capitalizar(texto) {
    // Vamos supor que o meu usuário digitou "viúva negra". Ali em cima, na declaração da variável palavras, o que fica guardado dentro é: palavras = [["viúva"],["negra"]]. No for estou dizendo que, para cada posição do vetor palavras, salvaremos como uma variável individual palavra. Em outras palavras: o for comela em 0 e vai até 1 e, na primeira execução, a variável palavra recebe palavras[0], ou seja, ["viúva"]. Então, primeiro verificamos se palavra não está vazio (!== "") e, caso não esteja, em resultado armazenamos o seguinte: a palavra[0], capitalizando + o restante a partir da posição 1 em diante. Ou seja, vai ficar em maiúsculo (V). Depois a partir da posição 1 em diante, mantém-se igual ("iúva"). No final, o que é armazenado em resultado é "Viúva".
    const palavras = texto.trim().toLowerCase().split(" ");
    const resultado = [];


    // Vamos supor que o meu usuário digitou "viúva negra". Aliem cima, na declaração da variável palavras, o que fica guardado dentro é: palavras = [["viúva"], 


    for (const palavra of palavras) {
        if (palavra !== "") {
            resultado.push(palavra[0].toUpperCase + palavra.slice(1));
        }
    }
    
    return resultado.join(" ");
}


function paraNumero (texto) {
    if (texto.trim() === "") {
        return NaN; // NaN significa Not a Number (Não é um número)
    }
    return Number(texto);
}


function tratar(dados) {
    return {
        codinome: capitalizar(dados.codinome),
        nome: capitalizar(dados.nome),
        idade: paraNumero(dados.idade),
        poder: paraNumero(dados.poder),
        ingresso: dados.ingresso,


        //trim() remove espaços em branco antes e depois. Por exemplo, se eu digitar "   porco.aranha@shield.com   ", com otrim fica "porco.aranha@shield.com"


        //toLowerCase() deixa tudo em minúsculo. Por exemplo, se eu digitar "PORCO.ARANHA@SHIELD.COM", com o toLowerCase() fica "porco.aranha@shield.com"
        email: dados.email.trim().toLowerCase()
    }
}


// addEventListener diz o que fazer quando o formuário for enviado.
formulario.addEventListener("submit", function (evento) {


// cancela o comportamento padrão do navegador.
    evento.preventDefault(); 


    try {
        const recruta = tratar(lerFormulario());


    } catch (erro) {


    } finally {


    }
})
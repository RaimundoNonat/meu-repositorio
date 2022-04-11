export default () => {
    const container = document.getElementById ('resultado')
  
    container.innerHTML =  `<h4> Tipos de Dados Primitivos`
    container.innerHTML += `<hr id="my-4">`
    container.innerHTML += `<p> <strong> String </strong>- São informações do tipo texto: </p>
    <p> const nome = "Nome" <br>
    console.log(typeof nome) <br>
    <br>
    [Running] <br>
    string</p>`
    container.innerHTML += `<p> <strong> Number </strong> - São números: </p>
    <p> const numero = 20 <br>
    console.log(typeof nome) <br>
    <br>
    [Running] <br>
    number</p>`
    container.innerHTML += `<p> <strong> Boolean </strong>- True e False (verdadeiro ou falso): </p>
    <p> const valor = true <br>
    const valorDois = false <br>
    console.log(typeof valor) <br>
    console.log(typeof valorDois) <br> <br>
    [Running] <br>
    boolean <br>
    boolean </p>`
    
    container.innerHTML += `<p> <strong> Undefined </strong> - Não aponta para nenhum local na memória, não armazena informações: </p>
    <p>   let valor <br>
    console.log(valor) <br> <br>
    [Running] <br>
    undefined </p>`
    
    
    ;



}


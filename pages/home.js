export default () => {
    const container  = document.createElement ('div')

    const template = `
   
    <div>
    <nav>
        <ul id='template'>
            <li><a href="/#explicacoes" data-link>Explicações</a> </li>
            <li><a href="/#variaveis">Variáveis</a> </li>
            <li><a href="/#objeto">Objeto</a> </li>
            <li><a href="/#funcao">Função</a> </li>
            <li><a href="/#tiposDeDados">Tipos de dados Primitivos</a> </li>
            <li><a href="/#operadores">Operadores</a> </li>
            <li><a href="/#">Number, parseInt, parseFloat</a> </li>
            <li><a href="/#">Alert, Confirm, Prompt</a> </li>
            <li><a href="/#">Operação Ternária</a> </li>
            <li><a href="/#">getElementById</a> </li>
            <li><a href="/#">addEventListenner</a> </li>
            <li><a href="/#">Impor e Export</a> </li>
            <li><a href="/#">Variáveis</a> </li>
        </ul>
        <ul" id="resultado">
            <h3>Manual de JavaScript</h3>
            <p>Vou explicar todos os tópicos que forem estudados de acordo com a forma que entendi!</p>
        </ul>
    </nav>
    </div>
    `;

    container.innerHTML = template
    return container

}


export default () => {
    const container = document.getElementById ('resultado')
         
    container.innerHTML = `<h4> Inserção do JavaScript no HTML`
    container.innerHTML += `<hr id="my-4">` 
    container.innerHTML += `<p> As formas de incluir o JavaScript dentro do código HTML é através da tag <strong>‘script’</strong>. Para inserir os blocos de código em JavaScript dentro do HTML, podemos fazer conforme abaixo: `
    container.innerHTML += "<p> script let nome = 'Pedro' alert(nome) </script> </p>"
    
    container.innerHTML += `<h4> Bloco de Código`
    container.innerHTML += `<hr id="my-4">`
    container.innerHTML += `<p> Bloco de código é tudo que está entre as chaves, conforme abaixo.`
    container.innerHTML += `<p> const bloco = { <br>
        nome: 'Raimundo', <br>
        idade: 25, <br>
        peso: 70 <br>
    }; <br>
    `;
    
    container.innerHTML += `<h4> Template Strings`
    container.innerHTML += `<hr id="my-4">`
    container.innerHTML += `
        <p> São utilizados para referenciar os valores das variáveis dentro do log. Abaixo segue exemplo de como referenciar entre aspas duplas: </p>
        <p> const nome = "Luiz Otavio" 
        <br> const sobrenome = "Miranda"
        <br> const idade = 30
        <br> const peso = 80
        <br> const altura = 1.80
        <br> const imc = peso / (altura * altura)
        </p>
    
    `;
    container.innerHTML += "<p> console.log('string 'dentro' do log'); <br> console.log('string 'dentro' do log'); <br> console.log(`string 'dentro' do 'log');"
    
    container.innerHTML += `<h4> Inserção do JavaScript no HTML`
    container.innerHTML += `<hr id="my-4">` 
    container.innerHTML += `
    <p> São utilizados para referenciar os valores das variáveis dentro do log. Abaixo segue exemplo de como referenciar entre aspas duplas: </p>
    <p> <strong> const</strong> nome = "Luiz Otavio" 
    <br> <strong> const</strong> sobrenome = "Miranda"
    <br> <strong> const</strong> idade = 30
    <br> <strong> const</strong> peso = 80
    <br> <strong> const</strong> altura = 1.80
    <br> <strong> const</strong> imc = peso / (altura * altura)
    </p>

`;

}
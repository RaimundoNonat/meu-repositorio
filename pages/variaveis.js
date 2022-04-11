export default () => {
    const container = document.getElementById ('resultado')
  
    container.innerHTML =  `<h4> Variáveis em JavaScript`
    container.innerHTML += `<hr id="my-4">`
    container.innerHTML += `<p> Variáveis são utilizadas para armazenar informações na memória. Existem três tipos de variáveis:  <strong>let, var e const</strong>.`
    container.innerHTML += `<p> - <strong>let e var</strong> são utilizadas para gravar informações que podem ser alteradas.`
    container.innerHTML += `<p> - <strong>const </strong>armazena definitivamente a informação e não pode ser alterada.`
    container.innerHTML += `<p><strong style="color:blue;"> <br>   let </strong> variavel = "variavel com let" var variavel = "variavel com var" const variavel = "variavel com const"const.`



}


import explicacoes from "./pages/explicacoes.js";
import variaveis from "./pages/variaveis.js";
import home from "./pages/home.js";
import tiposDeDados from "./pages/tiposDeDados.js";
import operadores from "./pages/operadores.js";

const main = document.querySelector('#root')

const init = () => { 
    window.addEventListener("hashchange", () => {
    switch(location.hash){
      case '#home':
      main.appendChild(home())
      break
      case '#explicacoes':
      explicacoes()
      break
      case '#variaveis':
      variaveis()
      break
      case '#tiposDeDados':
      tiposDeDados()
      break
      case '#operadores':
      operadores()
      break
      }
    })
}

addEventListener("load", () => { 
    main.appendChild(home())
    init()
})

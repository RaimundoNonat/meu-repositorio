export default () => {
    const container = document.getElementById ('resultado')
  
    container.innerHTML =  `<h4> Operadores`
    container.innerHTML += `<hr id="my-4">`
    container.innerHTML += `<p> <strong> Operadores Aritméticos </strong> <br>
    const a = 10 <br>
    const b = 10 </p>
    <p> console.log (a + b) // Soma <br>
    console.log (a * b) // Multiplicação <br>
    console.log (a / b) // Divisão <br>
    console.log (a - b) // Subtração <br>
    <br>
    [Running] <br>
    20 <br>
    100 <br>
    1 <br>
    0 </p>`;

    container.innerHTML +=  `<p> <strong> Operadores Relacionais </strong> <br>
    const a = 10 <br>
    const b = 10 </p>
    <p> console.log (a > b)    // A é maior que B <br>
    console.log (a < b)    // A é menor que B <br>
    console.log (a <= b)  // A é menor ou igual a B <br>
    console.log (a >= b)  // A é maior ou igual a B <br> 
    <br> 
    [Running] <br>
    false        // Falso, A não é maior que B <br>
    false        // Falso, A não é menor que B <br> 
    true         // Verdadeiro, A é menor ou igual a B <br> 
    true	     // Verdadeiro, A é maior ou igual a B </p>`;

    container.innerHTML +=  `<p> <strong> Operadores de Igualdade </strong> <br>
    O resultado de um operador de igualdade será: Boolean (true/false), baseado que a comparação seja verdadeira ou falsa: <br>
    const a = 10 <br>
    const b = 10 <br>
    <br>
    console.log(a == b)   // == operador de igualdade (não é recomendado usar) <br>
    console.log(a != b)   // != operador de desigualdade (não é recomendado usar) <br>
    console.log(a === b)  // === operador de igualdade estrita (valor e tipo do dado) <br>
    console.log(a !== b)  // !== operador de desigualdade estrita (valor e tipo do dado) </p>
    <p> [Running] <br>
    true          // Verdadeiro, A é igual a B (mesmo valor) <br>
    false         // Falso, A não é diferente de B (mesmo valor) <br>
    true          // Verdadeiro, A é semelhante a B (mesmo valor e mesmo tipo ‘number’) <br>
    false         // Falso, A não é diferente de B (mesmo valor) </p>`;

    container.innerHTML +=  `<p> <strong> Incremento e Decremento </strong> <br>
    let contador = 1 <br>
    contador++   // ++ operador de incremento, será adicionado 1 na variável contador. <br>
    console.log(contador) </p>
    <p> [Running] <br>
    2

`;
    container.innerHTML += `<p> <strong> Operadores de Atribuição </strong> <br>
    let contador = 2 <br> </p>

    <p> contador = 5    // = Operador de atribuição. <br> 
    console.log(contador); Resultado “5”. </p>
    
    <p> contador *= 5  // *= Operador de multiplicação. <br>
    console.log(contador); Resultado “10”. </p>
    
    <p> contador /= 5  // /= Operador de divisão. <br>
    console.log(contador); Resultado “0.4”. </p>
    
    <p> contador %= 5 // %= Restante da atribuição. <br>
    console.log(contador); Resultado “2”. </p>
     
    <p> contador += 5  // += Operador de soma. <br>
    console.log(contador); Resultado “7”. </p>
    
    <p> contador -= 5   // -= Operador de subtração. </br>
    console.log(contador); Resultado “-3”. </p>
    
    <p> contador <<= 5  // <<= Deslocamento à esquerda. </br>
    console.log(contador); Resultado “64”. </p>
    
    <p> contador >>= 5  // >>= Atribuição à direita. <br>
    console.log(contador); Resultado “0”. </p>
    
    <p> contador >>>= 5 // >>= Atribuição à direita não assinada. <br>
    console.log(contador); Resultado “0”. </p>
    
    <p> contador &= 5 // &= Atribuição “E”. <br>
    console.log(contador); Resultado “0”. </p>
    
    <p> contador ^= 5 // ^= Atribuição “Xor”. <br>
    console.log(contador); Resultado “7”. </p>
    
    <p> contador |= 5 // |= Atribuição “Ou”. <br>
    console.log(contador); Resultado “7”. </p>
    
    <p> resultado = contador != 5 // != Atribuição “Diferente”. <br>
    console.log(resultado); Resultado “true”. </p>`;


    container.innerHTML += `<p> <strong> Sufixo e Prefixo </strong> <br>
    Podemos realizar a inserção dos operadores <strong> antes (prefixo) </strong> e <strong> após (sufixo) </strong> a variável. <strong> Sufixo </strong>(variável++) | (variável--), primeiro a variável é lida pelo sistema e depois é feito o incremento/decremento do valor. <strong> Prefixo </strong> (++variável) | (--variável), primeiro é feito o incremento/decremento do valor e depois é lida a variável já com o valor alterado. </p>
     
    <p> let contador = 1 <br> 
    console.log(contador++) // O operador fez o incremento, mas como a variável “contador” vem antes do operador “++”, o valor incluso não será exibido nesse log.  <br>
    <br>
    [Running] <br>
    1 </p>
    ----------------------------------------------------------------------------------- <br>
    <p> let contador = 1 <br>
    console.log(contador++) <br>
    console.log(contador) // Nesse log, o valor incluso é exibido, pois foi incrementado no log acima. <br>
    <br>
    [Running] <br>
    1 <br>
    2 </p>
    ----------------------------------------------------------------------------------- <br>
    let contador = 1
    console.log(++contador) // Quando o operador é incluso antes da variável, a inclusão é exibida no mesmo log.
       
    [Running]
    2
    ----------------------------------------------------------------------------------- <br>
    <p> let contador = 1 <br>
    <br>
    contador--    // Decremento sufixo. <br>
    -- contador   // Decremento prefixo. <br>
    <br>
    contador++  // Incremento sufixo. <br> 
    ++contador  // Incremento prefixo. <br>
    <br>
    console.log(contador); <br>
    <br>
    [Running] <br>
    1 </p>`;
    
    container.innerHTML += `<p> <strong> Operadores Lógicos </strong> </p>`;

}
 

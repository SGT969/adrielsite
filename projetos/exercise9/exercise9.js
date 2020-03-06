 function detectClick() {
    let collectedNumber = getNumber()

    if (isNaN(collectedNumber)) {
        alert("Por favor, insira um valor numérico!")
        return
    }

    showAnswer(collectedNumber)
}

function getNumber() {
    return Number(document.getElementById("number").value)
}

function showAnswer(number) {
    if (number >= 0 && number < 10) {
        alert("Insuficiente");      
    } else if (number >= 10 && number < 14) {
        alert("Bom");     
    } else {
       alert("Muito Bom");     
    }
}
/* function reverse() {
let n = 1234
    n = n + "";
	return n.split("").reverse().join("");
} */

/* function factorialize(num) {
    // If the number is less than 0, reject it.
    if (num < 0) 
          return -1;
      
    // If the number is 0, its factorial is 1.
    else if (num == 0) 
        return 1;
      
    // Otherwise, call the recursive procedure again
      else {
          return (num * factorialize(num - 1));
      }
}
factorialize(4) */

//showAnswer(collectNumber)


/*let teste = [5,4,3,2,1] // Array Original, itens a serem submetidos à reversão

function reverseArray() {
    let emptyArray = []
    for ( i = teste.length-1; i >= 0; i--) {
        emptyArray.push(teste[i]) // A cada loop será adicionado o último item do Array principal para o novo, o tornando o primeiro.
    } 
    return emptyArray
}

function fixedArray(){
    let returnedArray = reverseArray()    
    reverseArray(returnedArray)
}
*/


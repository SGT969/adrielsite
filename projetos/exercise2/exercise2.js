function numbers() {
    let numbers = []
    for (i=0; i<3; i++) {
        numbers[i] = prompt(`Qual número você deseja?`);
    }
    return numbers
}

function numbersButSquared (numbers) {
    alert("Agora será listado os valores que você informou elevado ao quadrado");

    for (i=0; i<3; i++) {
        let count = 1;
        squaredNumber = (numbers[i]*numbers[i]);
        alert(`Esse é o valor ${count}: ${squaredNumber}`);
        count +=1;
    }
    return squaredNumber
}

let collectNumbers = numbers();
numbersButSquared(collectNumbers);
let max = 0

function getValue() {
    numbers = []
    for ( let i=0; i < 3; i++) {
       numbers[i] = prompt("Qual número você deseja?");
    }
    return numbers
}

function getTheBiggestValue(numbers) {
    for ( let i=0; i < numbers.length; i++) {
        
        if ( numbers[i] > max) {
            max = numbers[i];
            //alert(`${max} é o maior valor dentre os informados`);
        }
    }
    return max
}

let gotValues = getValue()

getTheBiggestValue(gotValues)

let greatestNumber = getTheBiggestValue(gotValues)

document.write(`O maior valor é ${greatestNumber}`)
function calculateValues() {
    let firstValue = Number(document.getElementById("firstValue").value)
    let secondValue = Number(document.getElementById("secondValue").value)
    let result = document.getElementById("resultado")

    if (result < 1000) {
        alert(`O resultado é ${firstValue + secondValue}.`);
    }
    else if (result === 1000) {
        alert(`O resultado é " ${firstValue + secondValue} e ele é igual a 1000.`);
    } else {
        alert(`O resultado é ${firstValue + secondValue} e ele é maior que 1000.`)
    }
}
function calcAllValues() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    let media = (nota1+nota2+nota3)/3;

    if (media >= 6) {
    alert(`A sua média é ${media} e você foi aprovado`);
    } else if (media >= 4) {
        alert(`A sua média é ${media} e você está de recuperação`);
    }  else {
        alert(`A sua média é ${media} e você foi reprovado`);
    }
}
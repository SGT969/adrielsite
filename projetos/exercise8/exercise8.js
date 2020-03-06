function showRandomNumber(min,max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    let elemResult = document.getElementById("result");
    document.getElementById("result").innerHTML = (Math.floor(Math.random() * (0 + 50 + 1)) + min);
}
function multiplyBy () {
    let num1 = document.getElementById("fnumber").value;
    let num2 = document.getElementById("snumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}
function divideBy () {
    let num1 = document.getElementById('fnumber').value;
    let num2 = document.getElementById('snumber').value;
    document.getElementById('result').innerHTML = num1 / num2;
}
function addTo () {
    let num1 = document.getElementById('fnumber').value;
    let num2 = document.getElementById('snumber').value;
    document.getElementById('result').innerHTML = +num1 + +num2;
}
function subtractFrom () {
    let num1 = document.getElementById('fnumber').value;
    let num2 = document.getElementById('snumber').value;
    document.getElementById('result').innerHTML = num1 - num2;
}
document.getElementById("mult").addEventListener("click", multiplyBy)
document.getElementById('divide').addEventListener('click', divideBy)
document.getElementById('add').addEventListener('click', addTo)
document.getElementById('sub').addEventListener('click', subtractFrom)


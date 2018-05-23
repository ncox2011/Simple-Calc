function multiplyBy () {
    let num1 = document.getElementById("fnumber").value;
    let num2 = document.getElementById("snumber").value;
    document.getElementById("result").innerHTML = num1 * num2;

    console.log(num1);
    console.log(num2);
}
document.getElementById("mult").addEventListener("click", multiplyBy)
console.log(document.getElementById("mult"))

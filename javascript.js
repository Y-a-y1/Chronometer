function myfirstfunction() {
    removeAllElements()
    let input1 = document.getElementById('number1')
    let input2 = document.getElementById('number2')
    let x = +input1.value;
    let y = parseInt(input2.value);
    let z = add(x, y);
    for (let count = 0; count < z; count++) {
        if (z > 100) {
            createResultElements("The result is bigger than 100")
        } else if (0 > z) {
            document.getElementById("output").innerHTML = "The result is negative";
        } else {
            createResultElements(z)
        }
    }
}

function removeAllElements() {
    var writing = document.getElementsByTagName("p")
    while (writing.length > 0) {
        writing[0].remove()
    }
}

function createResultElements(innerText){
    var tag = document.createElement("p")
    var text = document.createTextNode(innerText)
    tag.appendChild(text)
    var element = document.getElementById("create1")
    element.appendChild(tag)
}

function add(num1, num2){
    return num1 + num2
}
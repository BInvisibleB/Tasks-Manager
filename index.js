const buttonu = document.getElementById("buton");
const clear = document.getElementById("clear")
const ceva = document.getElementById("ceva")
const provide = document.getElementById("provide")
const input = document.getElementById("input");

buttonu.addEventListener("click", apasat)
clear.addEventListener("click", clearfunction)

function apasat() {
    if (input.value == " ") {

        provide.innerHTML = "<p class= 'please' >Please proivede your input!</p>"
        provide.innerHTML += "<br>"

    } else {
        ceva.innerHTML += '<p class="list-group-item"> <input type="checkbox"> ' + input.value + '</p>';
        provide.innerHTML = " ";
        input.value = " ";
    }
}

function clearfunction() {
    ceva.innerHTML = " ";
}
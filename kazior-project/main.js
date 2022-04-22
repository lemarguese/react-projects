window.onload = function () {
    let selecter = document.getElementById("lang-selecter");
    let selecterText = document.getElementsByClassName("selecter-text")[0];

    selecter.addEventListener("change", function () {
        selecterText.innerHTML = selecter.value;
    })
}

let dispToolButton = document.querySelector(".menu-button");
let toolBar = document.querySelector(".toolbar");

dispToolButton.addEventListener("click", function (e) {
    if (dispToolButton.children[0].classList[1]=="fa-times") {
        dispToolButton.children[0].classList.remove("fa-times");
        dispToolButton.children[0].classList.add("fa-bars");
        toolBar.style.display = "none";
    }
    else {
        dispToolButton.children[0].classList.remove("fa-bars");
        dispToolButton.children[0].classList.add("fa-times");
        toolBar.style.display = "block";
    }
})
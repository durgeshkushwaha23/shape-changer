var arr = ["circle", "rect", "oval", "triangle", "kuch"];
var btn = document.querySelector("button");
var box = document.querySelector("#box");

btn.addEventListener("click", function () {
    var a = Math.floor(Math.random() * arr.length);
    box.className = ""; 
    box.classList.add(arr[a]);
});
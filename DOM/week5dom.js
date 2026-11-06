let mainTitle = document.getElementById("mainTitle");
let themeBtn = document.getElementById("themeBtn");
let body = document.getElementById("body");

themeBtn.addEventListener("click", function() {
    themeBtn.style.color = "yellow";
    themeBtn.textContent = "Dark Mode Engaged";
    body.style.backgroundColor = "#222";
    mainTitle.style.color = "white";
});

themeBtn.addEventListener("dblclick", function() {
    themeBtn.style.color = "black";
    themeBtn.textContent = "Light Mode Engaged";
    body.style.backgroundColor = "#ffffff";
    mainTitle.style.color = "black";
});
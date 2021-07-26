let btnFirstContent =  document.getElementById("btn-first-content");
let btnSecondContent = document.getElementById("btn-second-content");

// let firstContent = document.querySelector("first-content");
// let secondContent = document.querySelector("second-content");

btnFirstContent.addEventListener("click", function () {
    document.getElementById("first-content").style.display = "none";
    document.getElementById("second-content").style.display = "inherit";
});

btnSecondContent.addEventListener("click", function () {
    document.getElementById("second-content").style.display = "none";
    document.getElementById("first-content").style.display = "inherit";
});
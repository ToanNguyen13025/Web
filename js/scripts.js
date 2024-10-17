var button0 = document.getElementById("button0");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var accessButton = document.getElementById("accessButton");

function popUpButtonClick(button1, button2){
    button1.style.display = 'none';
    button2.style.display = "inline-block";
}

button0.addEventListener("click", function(){
    popUpButtonClick(button0, button1)
});
button1.addEventListener("click", function(){
    popUpButtonClick(button1, button2)
});
button2.addEventListener("click", function(){
    popUpButtonClick(button2, button3)
});
button3.addEventListener("click", function(){
    popUpButtonClick(button3, button4)
});
button4.addEventListener("click", function(){
    popUpButtonClick(button4, button5)
});
button5.addEventListener("click", function(){
    alert("Éo cho chọn phương án này nữa");
    button5.style.display = 'none'
});

accessButton.addEventListener("click", function(){
    window.location.href = "../html/menu.html"
})

function goBack() {
    window.location.href="../html/index.html";
}

function goBackMenu() {
    window.location.href="../html/menu.html";
}



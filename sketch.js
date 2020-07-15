function show(){
    console.log("pressed");
    document.getElementById("main-picture").classList.add("active");
    setTimeout(hide, 2500);
}

function hide(){
    document.getElementById("main-picture").classList.remove("active");    
}

function checkAndImplement(){
    var input = document.querySelector("input");
    if(input.value == ""){
        alert("Please type a question");
    }else{
        show();
    }
}
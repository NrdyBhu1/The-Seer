function show(){
    console.log("pressed");
    document.getElementById("main-picture").classList.add("active");
    setTimeout(hide, 2500);
}

function hide(){
    document.getElementById("main-picture").classList.remove("active");    
}

function checkAndImplement(){
    var txt = document.getElementById("input-field").nodeValue;
    if(txt == ""){
        alert("Please type a question");
    }else{
        show();
    }
}
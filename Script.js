function show_menu(item){
    console.log(item.getAttribute("class"))
    let curr_class = item.getAttribute("class");
    if (curr_class == "hide"){
        document.getElementById("btn-burger").setAttribute("src","./images/icon-close.svg");
        item.setAttribute("class", "show");
        document.getElementById("main-menu").style.display = "flex";
        document.getElementById("burger-home").style.zIndex = 1001;
        document.getElementById("burger-home").style.position = "fixed";
    }
    else{
        close_menu();
    }
}

function close_menu(){
    document.getElementById("btn-burger").setAttribute("src","./images/icon-hamburger.svg")
    document.getElementById("burger-triger").setAttribute("class", "hide");
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("burger-home").style.zIndex = 0;
    document.getElementById("burger-home").style.position = "absolute";
}
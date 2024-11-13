

const body = document.querySelector("body");


const menuContainer = document.getElementsByClassName("menu-container")[0];
const menuToggle = document.getElementsByClassName("menu-toggle")[0];
const dropDown = document.getElementsByClassName("dropdown-menu")[0];


let displayDate = (e) => {
 
    if(e.target === menuContainer || e.target === menuToggle ){

    if(getComputedStyle(dropDown).display ==="none"){
        dropDown.style.display = "block";
        
    }else{
        dropDown.style.display = "none";
    }
}else if(e.target!=dropDown){
        dropDown.style.display = "none";
    }


}


body.addEventListener("click",displayDate);


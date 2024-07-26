
const links = document.querySelector(" .right .links");

const close = document.querySelector(".close");
const open = document.querySelector(".open");

// click and see items
function openMenu(){
    console.log(links)
    links.style.display = "flex";  
    open.style.display="none"
    close.style.display="flex"
}

// Displaying option to close munu bar
function closeMenu(){
    links.style.display="none";
    open.style.display="flex";
    close.style.display="none";
    console.log("something")
}
open.addEventListener('click',openMenu);

close.addEventListener('click',closeMenu);



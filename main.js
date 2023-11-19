const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

function toggleMenuVisibility() {
menuList.classList.toggle("hide");
}

menuBtn.addEventListener("click", toggleMenuVisibility);
/*верхняя кнопка*/

function toggleLabVisibility() {
    var x = document.getElementById("labs");
    if(x.style.display==="none") {
        x.style.display="block";
    }
    else {
        x.style.display="none";
         }
}
/*нижняя кнопка*/
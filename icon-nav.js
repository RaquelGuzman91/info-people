const d = document;

const headerBg = d.querySelector(".header");
const panelIsActive = d.querySelector(".menu_list");


export default function menuHamburger(btnHamburger, nav, menuLink) {
    d.addEventListener("click", (e)=>   {
        if(e.target.matches(btnHamburger) || e.target.matches(`${btnHamburger} *`) ){
            d.querySelector(nav).classList.toggle("is-active");
            d.querySelector(btnHamburger).classList.toggle("is-active")
        }
        if(e.target.matches(menuLink)){
            d.querySelector(nav).classList.remove("is-active");
            d.querySelector(btnHamburger).classList.remove("is-active");
        }else{
            headerBg.classList.add()
        }
    })
}
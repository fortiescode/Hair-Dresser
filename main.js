const mobileSideMenu = document.getElementById("mobile");

const humbMenu = document.querySelector(".humb-menu");

humbMenu.onclick = function (){
    mobileSideMenu.classList.toggle("show-mobile-menu");
};


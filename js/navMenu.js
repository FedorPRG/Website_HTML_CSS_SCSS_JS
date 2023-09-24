//Модуль для показа-скрытия меню
//находим иконку меню
const navMenuImg = document.querySelector(".nav_menu_img");
//находим коробку меню
const navMenuBox = document.querySelector(".nav_menu_box");
//вешаем собитие клика на иконку
navMenuImg.addEventListener("click", (event) => {
  //если класса нет-класс появляется, если класс есть-класс исчезает
  navMenuBox.classList.toggle("visibility");
});

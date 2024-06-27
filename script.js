javascript
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // ”бираем класс active у всех ссылок
            links.forEach(link => link.classList.remove("active"));

            // ƒобавл€ем класс active к текущей ссылке
            this.classList.add("active");

            // ѕоказываем соответствующий раздел, скрыва€ все остальные
            const target = document.querySelector(this.getAttribute("href"));
            sections.forEach(section => section.style.display = "none");
            target.style.display = "block";
        });
    });

    // »значально показываем только главную вкладку
    sections.forEach(section => section.style.display = "none");
    document.getElementById("home").style.display = "block";
    links[0].classList.add("active");
});
javascript
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // ������� ����� active � ���� ������
            links.forEach(link => link.classList.remove("active"));

            // ��������� ����� active � ������� ������
            this.classList.add("active");

            // ���������� ��������������� ������, ������� ��� ���������
            const target = document.querySelector(this.getAttribute("href"));
            sections.forEach(section => section.style.display = "none");
            target.style.display = "block";
        });
    });

    // ���������� ���������� ������ ������� �������
    sections.forEach(section => section.style.display = "none");
    document.getElementById("home").style.display = "block";
    links[0].classList.add("active");
});
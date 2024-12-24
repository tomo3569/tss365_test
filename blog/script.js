document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".navbar ul li");

    menuItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            const dropdown = item.querySelector(".dropdown");
            if (dropdown) dropdown.style.display = "block";
        });

        item.addEventListener("mouseleave", () => {
            const dropdown = item.querySelector(".dropdown");
            if (dropdown) dropdown.style.display = "none";
        });
    });

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("#menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            const offsetTop = targetSection.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth" // Menambahkan perilaku gulir yang halus
            });

            navbar.classList.remove("active");
        });
    });
});




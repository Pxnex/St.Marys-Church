document.addEventListener("scroll", function() {
var navbar = document.querySelector(".navbar");
if (window.scrollY > 100) {
    navbar.classList.add("solid");
} else {
    navbar.classList.remove("solid");
}
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth", // Animasi scrolling
                });
            }
        });
    });
});



// Ambil elemen navbar
const navbar = document.querySelector("nav");

// Ambil elemen #beranda
const beranda = document.querySelector("#beranda");

// Fungsi untuk menangani perubahan tampilan navbar saat menggulir
function changeNavbarStyle() {
    if (window.scrollY > 0) {
        // Saat digulir ke bawah, tambahkan class "nav-hitam" dan hapus class "nav-transparan"
        navbar.classList.add("nav-hitam");
        navbar.classList.remove("nav-transparan");

    } else {
        // Saat di atas, tambahkan class "nav-transparan" dan hapus class "nav-hitam"
        navbar.classList.add("nav-transparan");
        navbar.classList.remove("nav-hitam");

        // Hapus latar belakang navbar
        navbar.style.backgroundImage = "none";
    }
}

// Tambahkan event listener untuk mengganti tampilan navbar saat menggulir
window.addEventListener("scroll", changeNavbarStyle);
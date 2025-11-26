// =====================
// Rolagem suave
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const destino = document.querySelector(this.getAttribute("href"));
        if (destino) {
            e.preventDefault();
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// =====================
// Navbar com sombra ao rolar
// =====================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// =====================
// Animação ao aparecer
// =====================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("animar");
    });
});

document.querySelectorAll(".container, section, h2, p, img, .artigo-card")
    .forEach(el => observer.observe(el));

// =====================
// Destacar botão ativo no menu
// =====================
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// =====================
// Validação simples do formulário de contato
// =====================
const form = document.querySelector(".form-contato");

if (form) {
    form.addEventListener("submit", (e) => {
        const inputs = form.querySelectorAll("input, textarea");

        let vazio = false;

        inputs.forEach(campo => {
            if (campo.value.trim() === "") {
                campo.style.border = "2px solid red";
                vazio = true;
            } else {
                campo.style.border = "1px solid #ccc";
            }
        });

        if (vazio) {
            e.preventDefault();
            alert("Por favor, preencha todos os campos antes de enviar.");
        }
    });
}

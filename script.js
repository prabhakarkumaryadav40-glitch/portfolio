
        // Initialize animations on page load
        document.addEventListener('DOMContentLoaded', function() {

        });

        function createParticles() {
            const particleContainer = document.createElement('div');
            particleContainer.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
            `;
            document.body.appendChild(particleContainer);

                
                particle.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    background: hsl(${hue}, 70%, 60%);
                    border-radius: 50%;
                    animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation-delay: ${Math.random() * 2}s;
                    box-shadow: 0 0 ${size * 2}px hsl(${hue}, 70%, 60%);
                    opacity: ${Math.random() * 0.5 + 0.3};
                `;
                particleContainer.appendChild(particle);
            }

            // Add shooting stars
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    createShootingStar();
                }, Math.random() * 10000);
            }
        

        function createShootingStar() {

    const star = document.createElement("div");

    star.style.cssText = `
        position:fixed;
        left:${Math.random()*100}vw;
        top:${Math.random()*40}vh;
        width:2px;
        height:2px;
        background:white;
        border-radius:50%;
        box-shadow:0 0 12px white;
        pointer-events:none;
        z-index:-1;
        animation:shootingStar 2.5s linear forwards;
    `;

    const trail = document.createElement("div");

    trail.style.cssText = `
        position:fixed;
        left:${Math.random()*100}vw;
        top:${Math.random()*40}vh;
        width:120px;
        height:2px;
        background:linear-gradient(to right,white,transparent);
        transform:rotate(45deg);
        transform-origin:left center;
        pointer-events:none;
        z-index:-1;
        animation:shootingStar 2.5s linear forwards;
    `;

    document.body.appendChild(star);
    document.body.appendChild(trail);

    setTimeout(() => {
        star.remove();
        trail.remove();
    },2500);

    setTimeout(createShootingStar,5000 + Math.random()*8000);

}

        function handleSubmit(event) {

    event.preventDefault();

    const btn = event.target.querySelector("button");

    const originalText = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = "Sending...";

    const templateParams = {

        from_name: document.getElementById("name").value,

        from_email: document.getElementById("email").value,

        message: document.getElementById("message").value

    };

    emailjs.send(
    "service_n21livg",
    "template_3q2bujm",
    templateParams
)
    .then(() => {

        alert("✅ Thank you! Your message has been sent successfully.");

        event.target.reset();

    })
    .catch((error) => {

    console.log("Status:", error.status);
    console.log("Text:", error.text);
    console.log("Full Error:", JSON.stringify(error, null, 2));

    alert("❌ Failed to send message.");

})
    .finally(() => {

        btn.disabled = false;

        btn.innerHTML = originalText;

    });

}
        // Add some interactive hover effects
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.02)';
                
                // Add glowing effect
                this.style.boxShadow = '0 30px 60px rgba(102, 126, 234, 0.2), 0 0 30px rgba(102, 126, 234, 0.1)';
                
                // Animate icons inside the card
                const icon = this.querySelector('.icon');
                if (icon) {
                    icon.style.transform = 'scale(1.2) rotate(360deg)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                
                const icon = this.querySelector('.icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
            });

            // Add click animation
            card.addEventListener('click', function(e) {
                if (!e.target.closest('button') && !e.target.closest('input') && !e.target.closest('textarea')) {
                    this.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = 'translateY(-15px) scale(1.02)';
                    }, 150);
                }
            });
        });

        // Add parallax effect to header and mouse movement effects
window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(header){

        header.style.transform = `translateY(${window.scrollY * 0.15}px)`;

    }

});

        // ================= Scroll To Top =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
// ================= Typing Animation =================

const typingElement = document.getElementById("typing");

const texts = [
    "Computer Science Undergraduate",
    "Full-Stack Developer",
    "AI & Machine Learning Enthusiast",
    "Building Intelligent Software"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {

        typingElement.textContent = currentText.substring(0, charIndex++);
        
        if (charIndex > currentText.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typingElement.textContent = currentText.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

    }

    setTimeout(typeEffect, deleting ? 40 : 80);
}

typeEffect();
createShootingStar();
// ================= Scroll Reveal =================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

cards.forEach(card => observer.observe(card));
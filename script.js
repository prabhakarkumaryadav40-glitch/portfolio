
        // Initialize animations on page load
        document.addEventListener('DOMContentLoaded', function() {
            // Animate progress bars
            setTimeout(() => {
                const progressBars = document.querySelectorAll('.progress-fill');
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                });
            }, 500);

            // Animate counters
            setTimeout(() => {
                const counters = document.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                });
            }, 1000);

            // Add stagger animation to skills
            const skills = document.querySelectorAll('.skill');
            skills.forEach((skill, index) => {
                skill.style.animationDelay = `${index * 0.1}s`;
                skill.style.animation = 'fadeInUp 0.6s ease-out both';
            });

            // Add entrance animation to projects
            const projects = document.querySelectorAll('.project');
            projects.forEach((project, index) => {
                project.style.animationDelay = `${index * 0.2}s`;
                project.style.animation = 'slideInLeft 0.6s ease-out both';
            });

            // Add particle effect
            createParticles();
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

            for (let i = 0; i < 100; i++) {
                const particle = document.createElement('div');
                const size = Math.random() * 3 + 1;
                const hue = Math.random() * 60 + 200; // Blue to purple range
                
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
        }

        function createShootingStar() {
            const star = document.createElement('div');
            star.style.cssText = `
                position: fixed;
                width: 2px;
                height: 2px;
                background: white;
                border-radius: 50%;
                box-shadow: 0 0 10px white;
                z-index: -1;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 50}%;
                animation: shootingStar 3s linear;
            `;
            
            document.body.appendChild(star);
            
            // Add trail
            const trail = document.createElement('div');
            trail.style.cssText = `
                position: fixed;
                width: 100px;
                height: 1px;
                background: linear-gradient(90deg, white, transparent);
                z-index: -1;
                left: ${star.style.left};
                top: ${star.style.top};
                animation: shootingStar 3s linear;
                transform-origin: left center;
                transform: rotate(45deg);
            `;
            
            document.body.appendChild(trail);
            
            setTimeout(() => {
                star.remove();
                trail.remove();
                // Create another shooting star
                setTimeout(() => createShootingStar(), Math.random() * 15000 + 5000);
            }, 3000);
        }

        function animateCounter(element, target) {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current);
            }, 40);
        }

        function animateSkill(element) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = element.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255,255,255,0.4);
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: 50%;
                top: 50%;
                width: ${size}px;
                height: ${size}px;
                margin-left: -${size/2}px;
                margin-top: -${size/2}px;
            `;

            element.appendChild(ripple);
            
            // Enhanced animation
            element.style.transform = 'scale(1.15) rotate(10deg)';
            element.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
            element.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.4)';
            
            setTimeout(() => {
                element.style.transform = 'scale(1) rotate(0deg)';
                element.style.background = 'linear-gradient(135deg, #ff7eb3, #ff758c)';
                element.style.boxShadow = 'none';
                ripple.remove();
            }, 600);
        }

        // Add ripple keyframe and shooting star animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
            
            @keyframes shootingStar {
                0% {
                    transform: translateX(0) translateY(0) rotate(45deg);
                    opacity: 1;
                }
                70% {
                    opacity: 1;
                }
                100% {
                    transform: translateX(300px) translateY(300px) rotate(45deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        function showProjectDetails(projectName) {
            
        }

        function handleSubmit(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simulate form submission
            const btn = event.target.querySelector('.btn');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;
            
            setTimeout(() => {
                alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon!`);
                event.target.reset();
                btn.textContent = originalText;
                btn.disabled = false;
            }, 2000);
        }

        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.querySelector('.theme-toggle');
            
            body.classList.toggle('dark-theme');
            themeToggle.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
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
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const header = document.querySelector('.header');
            const cards = document.querySelectorAll('.card');
            
            header.style.transform = `translateY(${scrolled * 0.3}px)`;
            
            // Add scroll-based animations to cards
            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isVisible) {
                    const progress = 1 - (rect.top / window.innerHeight);
                    card.style.transform = `translateY(${(1 - progress) * 20}px)`;
                }
            });
        });

        // Add mouse movement parallax effect
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.card');
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            const mouseX = (e.clientX - centerX) / centerX;
            const mouseY = (e.clientY - centerY) / centerY;
            
            cards.forEach((card, index) => {
                const intensity = (index + 1) * 2;
                const currentTransform = card.style.transform || '';
                
                if (!card.matches(':hover')) {
                    card.style.transform = `${currentTransform} rotateY(${mouseX * intensity}deg) rotateX(${-mouseY * intensity}deg)`;
                }
            });
        });

        // Reset transform on mouse leave
        document.addEventListener('mouseleave', () => {
            document.querySelectorAll('.card').forEach(card => {
                if (!card.matches(':hover')) {
                    card.style.transform = 'translateY(0) scale(1) rotateY(0deg) rotateX(0deg)';
                }
            });
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
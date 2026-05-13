// assets/js/main.js
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Active link highlighting on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Navbar background change on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            formStatus.innerHTML = '<span style="color: #dc2626;">❌ Please fill in all required fields (Name, Email, Message)</span>';
            setTimeout(() => {
                formStatus.innerHTML = '';
            }, 3000);
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formStatus.innerHTML = '<span style="color: #dc2626;">❌ Please enter a valid email address</span>';
            setTimeout(() => {
                formStatus.innerHTML = '';
            }, 3000);
            return;
        }
        
        // Simulate form submission
        formStatus.innerHTML = '<span style="color: #10b981;">✅ Sending message...</span>';
        
        // Simulate API call delay
        setTimeout(() => {
            formStatus.innerHTML = '<span style="color: #10b981;">✅ Message sent successfully! I\'ll get back to you soon.</span>';
            contactForm.reset();
            setTimeout(() => {
                formStatus.innerHTML = '';
            }, 4000);
        }, 1000);
    });
}

// Animation for project cards on scroll
const projectCards = document.querySelectorAll('.project-card');
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            setTimeout(() => {
                entry.target.style.transition = 'all 0.5s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

projectCards.forEach(card => {
    cardObserver.observe(card);
});

// Animation for skill cards
const skillCards = document.querySelectorAll('.skill-cat');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(15px)';
            setTimeout(() => {
                entry.target.style.transition = 'all 0.4s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

skillCards.forEach(card => {
    skillObserver.observe(card);
});

// Console log
console.log('🚀 Avinash Ganta - DevOps Portfolio Loaded Successfully!');

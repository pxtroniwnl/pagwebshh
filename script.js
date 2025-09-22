// JavaScript para interacciones y animaciones
document.addEventListener('DOMContentLoaded', function() {
    
    // Reproductor de música real con audio local
    const playPauseBtn = document.getElementById('playPauseBtn');
    const audioPlayer = document.getElementById('audioPlayer');
    const progressFill = document.getElementById('progressFill');
    let isPlaying = false;

    if (playPauseBtn && audioPlayer) {
        playPauseBtn.addEventListener('click', function() {
            if (audioPlayer.paused) {
                audioPlayer.play();
                playPauseBtn.textContent = '⏸️';
                isPlaying = true;
            } else {
                audioPlayer.pause();
                playPauseBtn.textContent = '▶️';
                isPlaying = false;
            }
        });

        audioPlayer.addEventListener('timeupdate', function() {
            const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressFill.style.width = progress + '%';
        });

        audioPlayer.addEventListener('ended', function() {
            playPauseBtn.textContent = '▶️';
            isPlaying = false;
            progressFill.style.width = '0%';
        });
    }
    
    // Función para hacer scroll a la foto
    window.scrollToPhoto = function() {
        const photoSection = document.querySelector('.central-photo-section');
        if (photoSection) {
            photoSection.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };
    
    // Smooth scrolling para navegación
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Efecto parallax en el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Animación de las flores al hacer hover
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => {
        flower.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3) rotate(15deg)';
            this.style.transition = 'all 0.3s ease';
        });
        
        flower.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Efecto de aparición al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.memoria-card, .promesa-item, .futuro-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Efecto de partículas flotantes
    function createFloatingParticle() {
        const particle = document.createElement('div');
        particle.innerHTML = '✨';
        particle.style.position = 'fixed';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = '100vh';
        particle.style.fontSize = '1rem';
        particle.style.color = '#ffd700';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        particle.style.animation = 'floatUp 4s linear forwards';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 4000);
    }

    // Crear partículas cada 2 segundos
    setInterval(createFloatingParticle, 2000);

    // Efecto de click en las flores
    flowers.forEach(flower => {
        flower.addEventListener('click', function() {
            // Crear efecto de explosión de corazones
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.innerHTML = '💕';
                    heart.style.position = 'fixed';
                    heart.style.left = this.offsetLeft + 'px';
                    heart.style.top = this.offsetTop + 'px';
                    heart.style.fontSize = '1.5rem';
                    heart.style.pointerEvents = 'none';
                    heart.style.zIndex = '1000';
                    heart.style.animation = 'heartExplosion 1s ease-out forwards';
                    
                    document.body.appendChild(heart);
                    
                    setTimeout(() => {
                        heart.remove();
                    }, 1000);
                }, i * 100);
            }
        });
    });

    // Efecto de typing en el título principal
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Aplicar efecto de typing al título principal
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 150);
        }, 1000);
    }

    // Efecto de resplandor en las tarjetas de memorias
    const memoriaCards = document.querySelectorAll('.memoria-card');
    memoriaCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 40px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.1)';
        });
    });

    // Efecto de scroll suave para el indicador
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const memoriasSection = document.querySelector('#memorias');
            if (memoriasSection) {
                memoriasSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Ocultar el indicador de scroll cuando se hace scroll
    window.addEventListener('scroll', function() {
        if (scrollIndicator) {
            if (window.pageYOffset > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        }
    });

    // Efecto de rotación en las etiquetas de sueños
    const dreamTags = document.querySelectorAll('.dream-tag');
    dreamTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(5deg) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg) scale(1)';
        });
    });

    // Mensaje especial al hacer doble click en el título
    const heroTitleElement = document.querySelector('.hero-title');
    if (heroTitleElement) {
        heroTitleElement.addEventListener('dblclick', function() {
            alert('💕 ¡Te amo más que las palabras pueden expresar! 💕');
        });
    }

    // Efecto de ondas al hacer click en las promesas
    const promesaItems = document.querySelectorAll('.promesa-item');
    promesaItems.forEach(item => {
        item.addEventListener('click', function() {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 215, 0, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.marginLeft = '-50px';
            ripple.style.marginTop = '-50px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// CSS adicional para animaciones JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes heartExplosion {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0.5) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Premium 8K UI/UX JavaScript System

// Ultra-Modern Page Loading System
document.addEventListener('DOMContentLoaded', function() {
    // Premium loading animation
    showPremiumLoadingAnimation();
    
    console.log('🚀 Premium 8K UI/UX Website loaded successfully!');
    
    // Initialize all premium features
    initPremiumNavigation();
    initPremiumAnimations();
    initPremiumInteractions();
    initPremiumCarousels();
    initPremiumForms();
    initPremiumScrollEffects();
    initPremiumPerformance();
    
    console.log('✨ All premium features initialized successfully!');
});

// Premium Loading Animation
function showPremiumLoadingAnimation() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'premium-loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="premium-loading-container">
            <div class="premium-spinner">
                <div class="spinner-ring"></div>
                <div class="spinner-ring"></div>
                <div class="spinner-ring"></div>
            </div>
            <div class="loading-text">
                <span class="loading-title">Loading Premium Experience</span>
                <span class="loading-subtitle">Preparing 8K UI/UX</span>
            </div>
        </div>
    `;
    
    const loadingStyles = document.createElement('style');
    loadingStyles.textContent = `
        #premium-loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 1;
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .premium-loading-container {
            text-align: center;
            color: white;
        }
        
        .premium-spinner {
            position: relative;
            width: 80px;
            height: 80px;
            margin: 0 auto 2rem;
        }
        
        .spinner-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 3px solid transparent;
            border-radius: 50%;
            animation: premium-spin 2s linear infinite;
        }
        
        .spinner-ring:nth-child(1) {
            border-top-color: rgba(255, 255, 255, 0.8);
            animation-delay: 0s;
        }
        
        .spinner-ring:nth-child(2) {
            border-right-color: rgba(255, 255, 255, 0.6);
            animation-delay: 0.3s;
        }
        
        .spinner-ring:nth-child(3) {
            border-bottom-color: rgba(255, 255, 255, 0.4);
            animation-delay: 0.6s;
        }
        
        @keyframes premium-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .loading-title {
            display: block;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            letter-spacing: 1px;
        }
        
        .loading-subtitle {
            display: block;
            font-size: 1rem;
            opacity: 0.8;
            font-weight: 400;
        }
        
        #premium-loading-overlay.fade-out {
            opacity: 0;
            transform: scale(1.1);
        }
    `;
    
    document.head.appendChild(loadingStyles);
    document.body.appendChild(loadingOverlay);
    
    // Hide loading animation after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingOverlay.classList.add('fade-out');
            setTimeout(() => {
                document.body.removeChild(loadingOverlay);
                document.head.removeChild(loadingStyles);
            }, 800);
        }, 1500);
    });
}

// Premium Navigation System
function initPremiumNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const ctaButtons = document.querySelectorAll('.cta-btn');
    
    // Ultra-smooth scroll effect for navbar
    function handlePremiumNavbarScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
            
            // Premium parallax effect for hero elements
            const heroElements = document.querySelectorAll('#hero .stat-card, #hero .hero-image-placeholder');
            heroElements.forEach((element, index) => {
                const speed = 0.3 + (index * 0.1);
                element.style.transform = `translateY(${scrollTop * speed}px) scale(${1 - scrollTop * 0.0001})`;
            });
        } else {
            navbar.classList.remove('scrolled');
            
            // Reset parallax effect
            const heroElements = document.querySelectorAll('#hero .stat-card, #hero .hero-image-placeholder');
            heroElements.forEach(element => {
                element.style.transform = 'translateY(0px) scale(1)';
            });
        }
    }
    
    // Premium mobile menu with advanced animations
    function togglePremiumMobileMenu() {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.add('show');
            }, 10);
            mobileMenuBtn.classList.add('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-times text-xl"></i>';
            
            // Premium stagger animation for mobile menu items
            const menuItems = mobileMenu.querySelectorAll('.mobile-nav-link');
            menuItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-30px)';
                setTimeout(() => {
                    item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 100);
            });
        } else {
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 400);
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        }
    }
    
    // Ultra-smooth scroll to sections
    function smoothScrollToPremium(targetId) {
        const targetElement = document.getElementById(targetId.substring(1));
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Premium active navigation link tracking
    function updatePremiumActiveNavLink() {
        const sections = document.querySelectorAll('section, main');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const navbarHeight = navbar.offsetHeight;
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update active class with premium animation
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${currentSection}`) {
                link.classList.add('active');
                link.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    link.style.transform = '';
                }, 200);
            }
        });
    }
    
    // Premium event listeners
    window.addEventListener('scroll', () => {
        handlePremiumNavbarScroll();
        updatePremiumActiveNavLink();
    });
    
    mobileMenuBtn.addEventListener('click', togglePremiumMobileMenu);
    
    // Premium navigation link interactions
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                togglePremiumMobileMenu();
            }
            
            // Premium smooth scroll
            smoothScrollToPremium(targetId);
            
            // Premium click animation
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = '';
            }, 150);
        });
    });
    
    // Premium CTA button interactions
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href');
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                togglePremiumMobileMenu();
            }
            
            // Premium smooth scroll
            smoothScrollToPremium(targetId);
            
            // Premium click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        });
    });
    
    // Premium keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            togglePremiumMobileMenu();
        }
    });
    
    // Initialize premium navbar state
    handlePremiumNavbarScroll();
    updatePremiumActiveNavLink();
    
    // Premium logo animation
    const logo = document.getElementById('logo');
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(-30px)';
    
    setTimeout(() => {
        logo.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        logo.style.opacity = '1';
        logo.style.transform = 'translateY(0)';
    }, 200);
    
    // Premium navigation links entrance animation
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-30px)';
        
        setTimeout(() => {
            link.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
    });
    
    console.log('🎯 Premium navigation system initialized!');
}

// Premium Animations System
function initPremiumAnimations() {
    // Premium intersection observer for scroll animations
    const premiumObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const premiumScrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Premium animation classes
                if (element.dataset.premiumAnimation) {
                    element.classList.add(element.dataset.premiumAnimation);
                }
                
                // Premium fade-in animation
                element.classList.add('premium-fade-in');
                
                // Premium staggered animations for child elements
                const children = element.querySelectorAll('[data-premium-stagger]');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('premium-fade-in-up');
                    }, index * 150);
                });
                
                premiumScrollObserver.unobserve(element);
            }
        });
    }, premiumObserverOptions);
    
    // Observe elements with premium animations
    document.querySelectorAll('[data-aos], [data-premium-animation], .service-card, .benefit-card, .team-card, .pricing-card').forEach(element => {
        premiumScrollObserver.observe(element);
    });
    
    // Premium CSS animations
    const premiumAnimationStyles = document.createElement('style');
    premiumAnimationStyles.textContent = `
        .premium-fade-in {
            animation: premiumFadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .premium-fade-in-up {
            animation: premiumFadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes premiumFadeIn {
            from {
                opacity: 0;
                transform: scale(0.95);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        @keyframes premiumFadeInUp {
            from {
                opacity: 0;
                transform: translateY(40px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
    `;
    document.head.appendChild(premiumAnimationStyles);
    
    console.log('✨ Premium animations system initialized!');
}

// Premium Interactions System
function initPremiumInteractions() {
    // Premium service card interactions
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Premium floating animation
            this.style.transform = 'translateY(-12px) scale(1.03) rotateY(2deg)';
            this.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
            
            // Premium icon animation
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.3) rotate(10deg)';
            }
            
            // Premium glow effect
            this.style.boxShadow = '0 0 40px rgba(102, 126, 234, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset premium animations
            this.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
            this.style.boxShadow = '';
            
            // Reset premium icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // Premium stat counter animation with easing
    const statCards = document.querySelectorAll('.stat-card');
    const premiumObserverOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const premiumStatObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('div:first-child');
                if (statNumber) {
                    animatePremiumNumber(statNumber, parseInt(statNumber.textContent.replace(/\D/g, '')), 2500);
                }
            }
        });
    }, premiumObserverOptions);
    
    statCards.forEach(card => premiumStatObserver.observe(card));
    
    // Premium number animation with advanced easing
    function animatePremiumNumber(element, target, duration) {
        const start = 0;
        const startTime = performance.now();
        
        function updatePremiumNumber(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Premium easing function
            const easeOutBack = 1 + 2.70158 * Math.pow(progress - 1, 3) + 1.70158 * Math.pow(progress - 1, 2);
            const current = Math.floor(start + (target - start) * easeOutBack);
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updatePremiumNumber);
            } else {
                element.textContent = target;
            }
        }
        
        requestAnimationFrame(updatePremiumNumber);
    }
    
    console.log('🎮 Premium interactions system initialized!');
}

// Premium Carousels System
function initPremiumCarousels() {
    // Premium testimonial carousel
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentTestimonialIndex = 0;
    let testimonialInterval;
    let isTransitioning = false;

    if (testimonialItems.length === 0) return;

    // Premium testimonial positioning
    testimonialItems.forEach((item, index) => {
        item.style.position = 'absolute';
        item.style.top = '0';
        item.style.left = '0';
        item.style.width = '100%';
        item.style.transform = `translateX(${100 * index}%)`;
        item.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    function showPremiumTestimonial(index, direction = 'next') {
        if (isTransitioning) return;
        isTransitioning = true;
        
        testimonialItems.forEach((item, i) => {
            item.style.transform = `translateX(${100 * (i - index)}%)`;
        });
        
        // Premium dots update
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }
        
        // Premium slide animation
        const currentItem = testimonialItems[index];
        currentItem.classList.add('premium-slide-in-' + direction);
        
        setTimeout(() => {
            currentItem.classList.remove('premium-slide-in-' + direction);
            isTransitioning = false;
        }, 800);
    }

    function nextPremiumTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialItems.length;
        showPremiumTestimonial(currentTestimonialIndex, 'next');
    }

    function prevPremiumTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialItems.length) % testimonialItems.length;
        showPremiumTestimonial(currentTestimonialIndex, 'prev');
    }

    function startPremiumTestimonialAutoplay() {
        testimonialInterval = setInterval(nextPremiumTestimonial, 6000);
    }

    function pausePremiumTestimonialAutoplay() {
        clearInterval(testimonialInterval);
    }

    // Premium event listeners
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (index === currentTestimonialIndex) return;
            pausePremiumTestimonialAutoplay();
            currentTestimonialIndex = index;
            showPremiumTestimonial(currentTestimonialIndex);
            startPremiumTestimonialAutoplay();
        });
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            pausePremiumTestimonialAutoplay();
            prevPremiumTestimonial();
            startPremiumTestimonialAutoplay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            pausePremiumTestimonialAutoplay();
            nextPremiumTestimonial();
            startPremiumTestimonialAutoplay();
        });
    }

    // Premium pause on hover
    const carousel = document.querySelector('.testimonial-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', pausePremiumTestimonialAutoplay);
        carousel.addEventListener('mouseleave', startPremiumTestimonialAutoplay);
    }

    // Premium touch/swipe support
    let startX = 0;
    let startY = 0;
    
    if (carousel) {
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        carousel.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX;
            const diffY = startY - endY;

            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                pausePremiumTestimonialAutoplay();
                if (diffX > 0) {
                    nextPremiumTestimonial();
                } else {
                    prevPremiumTestimonial();
                }
                startPremiumTestimonialAutoplay();
            }
        });
    }

    // Initialize premium carousel
    showPremiumTestimonial(currentTestimonialIndex);
    startPremiumTestimonialAutoplay();
    
    console.log('🎠 Premium carousels system initialized!');
}

// Premium Forms System
function initPremiumForms() {
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');
    
    if (!contactForm) return;

    // Premium real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        // Premium validation on blur
        input.addEventListener('blur', () => validatePremiumField(input));
        
        // Premium input formatting
        if (input.type === 'email') {
            input.addEventListener('input', formatPremiumEmail);
        }
        
        if (input.type === 'tel') {
            input.addEventListener('input', formatPremiumPhone);
        }
    });

    function validatePremiumField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Remove existing premium styling
        field.classList.remove('border-red-500', 'border-green-500');
        
        // Premium validation logic
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = `${field.labels[0]?.textContent || 'This field'} is required`;
        }
        
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{7,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }
        
        if (field.name === 'name' && value) {
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters long';
            }
        }
        
        // Premium field styling
        if (isValid && value) {
            field.classList.add('border-green-500');
            removePremiumFieldError(field);
        } else if (!isValid) {
            field.classList.add('border-red-500');
            showPremiumFieldError(field, errorMessage);
        }
        
        return isValid;
    }
    
    function showPremiumFieldError(field, message) {
        removePremiumFieldError(field);
        
        const errorElement = document.createElement('div');
        errorElement.className = 'premium-field-error text-red-500 text-sm mt-1';
        errorElement.textContent = message;
        
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }
    
    function removePremiumFieldError(field) {
        const existingError = field.parentNode.querySelector('.premium-field-error');
        if (existingError) {
            existingError.remove();
        }
    }
    
    function formatPremiumEmail(e) {
        e.target.value = e.target.value.replace(/\s/g, '').toLowerCase();
    }
    
    function formatPremiumPhone(e) {
        e.target.value = e.target.value.replace(/[^\d\+\-\(\)\s]/g, '');
    }

    // Premium form submission with loading state
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous premium messages
        formResponse.style.display = 'none';
        formResponse.classList.remove('success', 'error');
        
        // Premium validation
        let isFormValid = true;
        inputs.forEach(input => {
            if (!validatePremiumField(input)) {
                isFormValid = false;
            }
        });
        
        if (!isFormValid) {
            showPremiumFormMessage('Please correct the errors above.', 'error');
            return;
        }
        
        // Premium loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Premium form submission simulation
        setTimeout(() => {
            showPremiumFormMessage('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();
            
            // Reset premium button
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
            
            // Remove premium validation styling
            inputs.forEach(input => {
                input.classList.remove('border-red-500', 'border-green-500');
                removePremiumFieldError(input);
            });
        }, 2000);
    });
    
    function showPremiumFormMessage(message, type) {
        formResponse.textContent = message;
        formResponse.classList.add(type);
        formResponse.style.display = 'block';
        
        // Auto-hide premium success messages
        if (type === 'success') {
            setTimeout(() => {
                formResponse.style.display = 'none';
            }, 5000);
        }
    }
    
    console.log('📝 Premium forms system initialized!');
}

// Premium Scroll Effects System
function initPremiumScrollEffects() {
    // Premium parallax effect for hero section
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Premium scroll-triggered animations
    const premiumScrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Premium scroll animation classes
                if (element.dataset.premiumScrollAnimation) {
                    element.classList.add(element.dataset.premiumScrollAnimation);
                }
                
                // Premium generic fade-in animation
                element.classList.add('premium-scroll-fade-in');
                
                // Premium staggered animations for child elements
                const children = element.querySelectorAll('[data-premium-scroll-stagger]');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('premium-scroll-fade-in-up');
                    }, index * 200);
                });
                
                premiumScrollObserver.unobserve(element);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements with premium scroll animations
    document.querySelectorAll('[data-premium-scroll-animation], .service-card, .benefit-card, .team-card, .pricing-card').forEach(element => {
        premiumScrollObserver.observe(element);
    });
    
    console.log('📜 Premium scroll effects system initialized!');
}

// Premium Performance System
function initPremiumPerformance() {
    // Premium throttling for scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
            // Premium scroll handling
            handlePremiumNavbarScroll();
            updatePremiumActiveNavLink();
        }, 16); // 60fps
    });
    
    // Premium image lazy loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Premium memory management
    window.addEventListener('beforeunload', () => {
        // Clean up premium event listeners
        window.removeEventListener('scroll', handlePremiumNavbarScroll);
    });
    
    console.log('⚡ Premium performance system initialized!');
}

// Premium Utility Functions
function handlePremiumNavbarScroll() {
    const navbar = document.getElementById('navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

function updatePremiumActiveNavLink() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const sections = document.querySelectorAll('section, main');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbarHeight = navbar.offsetHeight;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Enhanced JavaScript for Interactive Website Features

// Page Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    // Show loading animation
    showLoadingAnimation();
    
    console.log('Website loaded successfully!');
    
    // Navigation Elements
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const ctaButtons = document.querySelectorAll('.cta-btn');
    
    // Enhanced Scroll Effect for Navbar
    function handleNavbarScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
            // Add parallax effect to hero elements
            const heroElements = document.querySelectorAll('#hero .stat-card, #hero .hero-image-placeholder');
            heroElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrollTop * speed}px)`;
            });
        } else {
            navbar.classList.remove('scrolled');
            // Reset parallax effect
            const heroElements = document.querySelectorAll('#hero .stat-card, #hero .hero-image-placeholder');
            heroElements.forEach(element => {
                element.style.transform = 'translateY(0px)';
            });
        }
    }
    
    // Enhanced Mobile Menu Toggle
    function toggleMobileMenu() {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.add('show');
            }, 10);
            mobileMenuBtn.classList.add('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-times text-xl"></i>';
            
            // Add stagger animation to mobile menu items
            const menuItems = mobileMenu.querySelectorAll('.mobile-nav-link');
            menuItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
                setTimeout(() => {
                    item.style.transition = 'all 0.3s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 100);
            });
        } else {
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        }
    }
    
    // Smooth Scroll to Sections
    function smoothScrollTo(targetId) {
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
    
    // Update Active Navigation Link
    function updateActiveNavLink() {
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
        
        // Update active class on navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Close mobile menu when clicking outside
    function closeMobileMenuOnOutsideClick(e) {
        if (!navbar.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    }
    
    // Add Event Listeners
    window.addEventListener('scroll', () => {
        handleNavbarScroll();
        updateActiveNavLink();
    });
    
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    document.addEventListener('click', closeMobileMenuOnOutsideClick);
    
    // Navigation link click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
            
            // Smooth scroll to target
            smoothScrollTo(targetId);
            
            // Add click animation
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = '';
            }, 150);
        });
    });
    
    // CTA button click handlers
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href');
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
            
            // Smooth scroll to target
            smoothScrollTo(targetId);
            
            // Add click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        });
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        // Close mobile menu on Escape key
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });
    
    // Initialize navbar state
    handleNavbarScroll();
    updateActiveNavLink();
    
    // Add loading animation to logo
    const logo = document.getElementById('logo');
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        logo.style.transition = 'all 0.6s ease';
        logo.style.opacity = '1';
        logo.style.transform = 'translateY(0)';
    }, 100);
    
    // Add entrance animation to navigation links
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            link.style.transition = 'all 0.4s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
    
    // Throttle scroll events for better performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
            handleNavbarScroll();
            updateActiveNavLink();
        }, 10);
    });
    
console.log('Navigation bar initialized successfully!');
    
    // Enhanced Service Card Interactions
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add floating animation
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.25)';
            
            // Animate icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset animations
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
            
            // Reset icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // Enhanced Stat Counter Animation
    const statCards = document.querySelectorAll('.stat-card');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('div:first-child');
                if (statNumber) {
                    animateNumber(statNumber, parseInt(statNumber.textContent.replace(/\D/g, '')), 2000);
                }
            }
        });
    }, observerOptions);
    
    statCards.forEach(card => statObserver.observe(card));
    
    // Initialize all interactive features
    initTestimonialCarousel();
    initFormValidation();
    initScrollAnimations();
    initStickyHeader();
    initFeaturesAnimations();
    
    console.log('All interactive features initialized successfully!');
});

// Features Section Functionality
function initFeaturesAnimations() {
    // Enhanced Statistics Counter Animation
    function animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16); // 60fps
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }
    
    // Enhanced Number Animation with Easing
    function animateNumber(element, target, duration) {
        const start = 0;
        const startTime = performance.now();
        
        function updateNumber(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (target - start) * easeOutQuart);
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = target;
            }
        }
        
        requestAnimationFrame(updateNumber);
    }
    
    // Progress Bar Animation
    function animateProgressBar(element, targetWidth) {
        setTimeout(() => {
            element.style.width = targetWidth + '%';
        }, 200);
    }
    
    // Intersection Observer for triggering animations
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const featuresObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate statistics counters
                if (entry.target.classList.contains('stat-number')) {
                    const target = parseInt(entry.target.getAttribute('data-count'));
                    animateCounter(entry.target, target, 2000);
                    featuresObserver.unobserve(entry.target);
                }
                
                // Animate progress bars
                if (entry.target.classList.contains('progress-fill')) {
                    const targetWidth = parseInt(entry.target.getAttribute('data-width'));
                    animateProgressBar(entry.target, targetWidth);
                    featuresObserver.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe statistics counters
    document.querySelectorAll('.stat-number').forEach(counter => {
        featuresObserver.observe(counter);
    });
    
    // Observe progress bars
    document.querySelectorAll('.progress-fill').forEach(progressBar => {
        featuresObserver.observe(progressBar);
    });
    
    // Add hover effects for stat items
    document.querySelectorAll('.stat-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add hover effects for benefit cards
    document.querySelectorAll('.benefit-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.benefit-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.benefit-icon i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // Add pulse animation to trust badges
    document.querySelectorAll('.trust-badge').forEach((badge, index) => {
        setTimeout(() => {
            badge.style.animation = 'pulse 2s infinite';
        }, index * 200);
    });
    
    console.log('Features section animations initialized!');
}

// Loading Animation Function
function showLoadingAnimation() {
    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner-ring"></div>
            <div class="loading-text">Loading...</div>
        </div>
    `;
    
    // Inject loading styles
    const loadingStyles = document.createElement('style');
    loadingStyles.textContent = `
        #loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 1;
            transition: opacity 0.5s ease;
        }
        
        .loading-spinner {
            text-align: center;
            color: white;
        }
        
        .spinner-ring {
            width: 60px;
            height: 60px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        
        .loading-text {
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 1px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    
    document.head.appendChild(loadingStyles);
    document.body.appendChild(loadingOverlay);
    
    // Hide loading animation after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(loadingOverlay);
                document.head.removeChild(loadingStyles);
            }, 500);
        }, 1000);
    });
}

// Testimonial Carousel Function
function initTestimonialCarousel() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentTestimonialIndex = 0;
    let testimonialInterval;
    let isTransitioning = false;

    if (testimonialItems.length === 0) return;

    // Initialize testimonial positions
    testimonialItems.forEach((item, index) => {
        item.style.position = 'absolute';
        item.style.top = '0';
        item.style.left = '0';
        item.style.width = '100%';
        item.style.transform = `translateX(${100 * index}%)`;
        item.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    function showTestimonial(index, direction = 'next') {
        if (isTransitioning) return;
        isTransitioning = true;
        
        testimonialItems.forEach((item, i) => {
            item.style.transform = `translateX(${100 * (i - index)}%)`;
        });
        
        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }
        
        // Add slide animation class
        const currentItem = testimonialItems[index];
        currentItem.classList.add('slide-in-' + direction);
        
        setTimeout(() => {
            currentItem.classList.remove('slide-in-' + direction);
            isTransitioning = false;
        }, 600);
    }

    function nextTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialItems.length;
        showTestimonial(currentTestimonialIndex, 'next');
    }

    function prevTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialItems.length) % testimonialItems.length;
        showTestimonial(currentTestimonialIndex, 'prev');
    }

    function startTestimonialAutoplay() {
        testimonialInterval = setInterval(nextTestimonial, 5000);
    }

    function pauseTestimonialAutoplay() {
        clearInterval(testimonialInterval);
    }

    // Event listeners
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (index === currentTestimonialIndex) return;
            pauseTestimonialAutoplay();
            currentTestimonialIndex = index;
            showTestimonial(currentTestimonialIndex);
            startTestimonialAutoplay();
        });
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            pauseTestimonialAutoplay();
            prevTestimonial();
            startTestimonialAutoplay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            pauseTestimonialAutoplay();
            nextTestimonial();
            startTestimonialAutoplay();
        });
    }

    // Pause on hover
    const carousel = document.querySelector('.testimonial-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', pauseTestimonialAutoplay);
        carousel.addEventListener('mouseleave', startTestimonialAutoplay);
    }

    // Touch/swipe support
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

            // Only swipe if horizontal movement is greater than vertical
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                pauseTestimonialAutoplay();
                if (diffX > 0) {
                    nextTestimonial();
                } else {
                    prevTestimonial();
                }
                startTestimonialAutoplay();
            }
        });
    }

    // Initialize
    showTestimonial(currentTestimonialIndex);
    startTestimonialAutoplay();
    
    console.log('Testimonial carousel initialized!');
}

// Enhanced Form Validation Function
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');
    
    if (!contactForm) return;

    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        // Add validation on blur
        input.addEventListener('blur', () => validateField(input));
        
        // Add input formatting
        if (input.type === 'email') {
            input.addEventListener('input', formatEmail);
        }
        
        if (input.type === 'tel') {
            input.addEventListener('input', formatPhone);
        }
    });

    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Remove existing error styling
        field.classList.remove('border-red-500', 'border-green-500');
        
        // Check if required field is empty
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = `${field.labels[0]?.textContent || 'This field'} is required`;
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{7,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }
        
        // Name validation
        if (field.name === 'name' && value) {
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters long';
            }
        }
        
        // Update field styling
        if (isValid && value) {
            field.classList.add('border-green-500');
            removeFieldError(field);
        } else if (!isValid) {
            field.classList.add('border-red-500');
            showFieldError(field, errorMessage);
        }
        
        return isValid;
    }
    
    function showFieldError(field, message) {
        // Remove existing error message
        removeFieldError(field);
        
        // Create error element
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error text-red-500 text-sm mt-1';
        errorElement.textContent = message;
        
        // Insert after field
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }
    
    function removeFieldError(field) {
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }
    
    function formatEmail(e) {
        // Remove spaces and convert to lowercase
        e.target.value = e.target.value.replace(/\s/g, '').toLowerCase();
    }
    
    function formatPhone(e) {
        // Remove non-numeric characters except + - () space
        e.target.value = e.target.value.replace(/[^\d\+\-\(\)\s]/g, '');
    }

    // Form submission with loading state
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous messages
        formResponse.style.display = 'none';
        formResponse.classList.remove('success', 'error');
        
        // Validate all fields
        let isFormValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });
        
        if (!isFormValid) {
            showFormMessage('Please correct the errors above.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            showFormMessage('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();
            
            // Reset button
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
            
            // Remove validation styling
            inputs.forEach(input => {
                input.classList.remove('border-red-500', 'border-green-500');
                removeFieldError(input);
            });
        }, 2000);
    });
    
    function showFormMessage(message, type) {
        formResponse.textContent = message;
        formResponse.classList.add(type);
        formResponse.style.display = 'block';
        
        // Auto-hide success messages
        if (type === 'success') {
            setTimeout(() => {
                formResponse.style.display = 'none';
            }, 5000);
        }
    }
    
    console.log('Form validation initialized!');
}

// Scroll-triggered Animations Function
function initScrollAnimations() {
    // Create intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add animation classes based on data attributes
                if (element.dataset.scrollAnimation) {
                    element.classList.add(element.dataset.scrollAnimation);
                }
                
                // Generic fade-in animation
                element.classList.add('animate-fade-in');
                
                // Staggered animations for child elements
                const children = element.querySelectorAll('[data-stagger]');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-fade-in-up');
                    }, index * 100);
                });
                
                scrollObserver.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe elements with scroll animation attributes
    document.querySelectorAll('[data-aos], [data-scroll-animation], .service-card, .benefit-card, .team-card, .pricing-card').forEach(element => {
        scrollObserver.observe(element);
    });
    
    // Parallax effect for hero section
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Add CSS animations
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        .animate-fade-in {
            animation: fadeIn 0.8s ease forwards;
        }
        
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease forwards;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(animationStyles);
    
    console.log('Scroll animations initialized!');
}

// Sticky Header Function
function initStickyHeader() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScrollTop = 0;
    let isScrollingDown = false;
    
    // Add CSS for sticky header effects
    const stickyStyles = document.createElement('style');
    stickyStyles.textContent = `
        #navbar {
            transition: all 0.3s ease;
        }
        
        #navbar.scrolled {
            background-color: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        #navbar.hidden {
            transform: translateY(-100%);
        }
        
        .success {
            color: #10b981;
            background-color: #d1fae5;
            padding: 10px;
            border-radius: 5px;
            border-left: 4px solid #10b981;
        }
        
        .error {
            color: #ef4444;
            background-color: #fee2e2;
            padding: 10px;
            border-radius: 5px;
            border-left: 4px solid #ef4444;
        }
    `;
    document.head.appendChild(stickyStyles);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Show/hide navbar based on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            if (!isScrollingDown) {
                navbar.classList.add('hidden');
                isScrollingDown = true;
            }
        } else {
            // Scrolling up
            if (isScrollingDown) {
                navbar.classList.remove('hidden');
                isScrollingDown = false;
            }
        }
        
        lastScrollTop = scrollTop;
    });
    
    console.log('Sticky header initialized!');
}

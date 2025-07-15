// Initialize animations
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animate class based on element type
                if (entry.target.classList.contains('section-title')) {
                    entry.target.classList.add('animate');
                } 
                else if (entry.target.classList.contains('product-card')) {
                    entry.target.classList.add('animate');
                }
                else if (entry.target.classList.contains('image-container')) {
                    entry.target.classList.add('animate');
                }
                else if (entry.target.classList.contains('team-member')) {
                    entry.target.classList.add('animate');
                }
                else if (entry.target.classList.contains('contact-form')) {
                    entry.target.classList.add('animate');
                }
                
                // Stop observing after animation triggers
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements that need animation
    document.querySelectorAll('.section-title').forEach(el => observer.observe(el));
    document.querySelectorAll('.product-card').forEach(el => observer.observe(el));
    document.querySelectorAll('.image-container').forEach(el => observer.observe(el));
    document.querySelectorAll('.team-member').forEach(el => observer.observe(el));
    document.querySelectorAll('.contact-form').forEach(el => observer.observe(el));
    
    // Add hover animations to elements
    document.querySelectorAll('.hover-grow').forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.classList.add('hover-grow');
        });
        el.addEventListener('mouseleave', () => {
            el.classList.remove('hover-grow');
        });
    });
    
    // Add pulse animation to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-section .btn');
    ctaButtons.forEach(btn => {
        btn.classList.add('pulse');
    });
    
    // Add float animation to hero image
    const heroPattern = document.querySelector('.hero-pattern');
    if (heroPattern) {
        heroPattern.classList.add('float');
    }
    
    // Add rotate animation to value icons
    const valueIcons = document.querySelectorAll('.value-icon i');
    valueIcons.forEach(icon => {
        icon.classList.add('rotate');
    });
    
    // Add shake animation to social icons
    const socialIcons = document.querySelectorAll('.social-links a');
    socialIcons.forEach(icon => {
        icon.classList.add('shake');
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initAnimations);
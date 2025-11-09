// ChildWell360 Standalone JavaScript

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-menu-active');
        });
    }

    // Contact support button handler
    const supportButton = document.querySelector('.support-button');
    if (supportButton) {
        supportButton.addEventListener('click', function() {
            alert('Please contact your administrator for support.\n\nEmail: support@childwell360.org\nPhone: +256-XXX-XXXXXX');
        });
    }

    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active state to current navigation item
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-button').forEach(button => {
        if (button.getAttribute('href') === currentPath) {
            button.classList.add('nav-button-active');
        }
    });
});

// Mobile menu styles (add to CSS dynamically if needed)
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 1023px) {
        .nav-menu.mobile-menu-active {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--primary);
            flex-direction: column;
            padding: 1rem 1.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .nav-menu.mobile-menu-active .nav-button {
            width: 100%;
            margin-bottom: 0.5rem;
        }
    }
`;
document.head.appendChild(style);
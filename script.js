// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            console.log(`Navigated to: ${this.textContent}`);
        });
    });

    // Handle search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
            console.log(`Search performed for: ${searchTerm}`);
            // Here you would typically send the search query to your backend
        } else {
            alert('Please enter a search term');
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Handle login form
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (email && password) {
            // Simulate login process
            const loginBtn = this.querySelector('.login-btn');
            const originalText = loginBtn.textContent;
            
            loginBtn.textContent = 'Logging in...';
            loginBtn.disabled = true;
            
            // Simulate API call delay
            setTimeout(() => {
                alert(`Login attempted with email: ${email}`);
                console.log(`Login attempt for: ${email}`);
                
                loginBtn.textContent = originalText;
                loginBtn.disabled = false;
                
                // Reset form
                this.reset();
            }, 2000);
        } else {
            alert('Please fill in all fields');
        }
    });

    // Handle social login icons
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.getAttribute('data-platform');
            alert(`Redirecting to ${platform} login...`);
            console.log(`Social login attempted: ${platform}`);
        });
    });

    // Handle JOIN US button
    const joinBtn = document.getElementById('joinBtn');
    
    joinBtn.addEventListener('click', function() {
        alert('Redirecting to course enrollment page...');
        console.log('Join button clicked');
    });

    // Handle sign up link
    const signupLink = document.getElementById('signupLink');
    
    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to sign up page...');
        console.log('Sign up link clicked');
    });

    // Add smooth scrolling effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add loading animation for form inputs
    const formInputs = document.querySelectorAll('.form-input, .search-input');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add hover effects for buttons
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add parallax effect to background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.main-container');
        const speed = scrolled * 0.5;
        
        parallax.style.backgroundPosition = `center ${speed}px`;
    });

    // Form validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    emailInput.addEventListener('blur', function() {
        const email = this.value.trim();
        if (email && !validateEmail(email)) {
            this.style.borderColor = '#ef4444';
            this.setCustomValidity('Please enter a valid email address');
        } else {
            this.style.borderColor = '#4b5563';
            this.setCustomValidity('');
        }
    });

    // Password strength indicator (basic)
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        if (password.length > 0 && password.length < 6) {
            this.style.borderColor = '#ef4444';
        } else if (password.length >= 6) {
            this.style.borderColor = '#10b981';
        } else {
            this.style.borderColor = '#4b5563';
        }
    });

    // Loading animation for buttons
    function showLoading(button, text = 'Loading...') {
        const originalText = button.textContent;
        button.textContent = text;
        button.disabled = true;
        
        return function() {
            button.textContent = originalText;
            button.disabled = false;
        };
    }

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key to close any modals or reset forms
        if (e.key === 'Escape') {
            // Reset any active states
            navLinks.forEach(link => {
                if (link !== navLinks[0]) {
                    link.classList.remove('active');
                }
            });
            navLinks[0].classList.add('active');
        }
    });

    // Console welcome message
    console.log('%cWelcome to PraRoz!', 'color: #ff6b35; font-size: 20px; font-weight: bold;');
    console.log('Web Design & Development Course - Ready to learn!');
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced search function
const debouncedSearch = debounce(function(searchTerm) {
    console.log(`Debounced search: ${searchTerm}`);
}, 300);

// Add real-time search suggestions (placeholder)
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.trim();
    if (searchTerm.length > 2) {
        debouncedSearch(searchTerm);
    }
});
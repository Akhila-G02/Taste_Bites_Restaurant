// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

// Smooth Scrolling
function scrollToSection(e, id) {
    e.preventDefault();
    const element = document.getElementById(id);
    const navHeight = document.querySelector('nav').offsetHeight;
    const elementPosition = element.offsetTop - navHeight;
    
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });

    // Close mobile menu after clicking
    document.getElementById('navMenu').classList.remove('active');
}

// Menu Filter Function
function filterMenu(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    const buttons = document.querySelectorAll('.category-btn');
    
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Filter menu items
    menuItems.forEach(item => {
        if (category === 'all') {
            item.classList.add('show');
        } else if (item.classList.contains(category)) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
}

// Set minimum date to today
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// Form Validation and Submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset errors
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.style.display = 'none');
    
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name === '' || name.length < 2) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    
    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    
    // Phone validation
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (phone === '' || phone.length < 10 || !phoneRegex.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }
    
    // Date validation
    const date = document.getElementById('date').value;
    if (date === '') {
        document.getElementById('dateError').style.display = 'block';
        isValid = false;
    }
    
    // Time validation
    const time = document.getElementById('time').value;
    if (time === '') {
        document.getElementById('timeError').style.display = 'block';
        isValid = false;
    }
    
    // Guests validation
    const guests = document.getElementById('guests').value;
    if (guests === '') {
        document.getElementById('guestsError').style.display = 'block';
        isValid = false;
    }
    
    // If form is valid, show success message
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('bookingForm').reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 5000);
        
        // Scroll to success message
        document.getElementById('successMessage').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
        });
    }
});

// Dynamic content animation on load
window.addEventListener('load', function() {
    const specialCards = document.querySelectorAll('.special-card');
    specialCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'fadeInUp 0.6s';
        }, index * 200);
    });
});
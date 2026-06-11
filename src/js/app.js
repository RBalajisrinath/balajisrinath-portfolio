// Windows Portfolio - Main App
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initAnimations();
});

function initNavigation() {
    const taskbarBtns = document.querySelectorAll('.taskbar-btn');
    taskbarBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            showSection(section);
        });
    });
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(`section-${sectionName}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update taskbar
    document.querySelectorAll('.taskbar-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-section') === sectionName) {
            btn.classList.add('active');
        }
    });
}

function openStartMenu() {
    document.getElementById('start-menu').classList.remove('hidden');
}

function closeStartMenu() {
    document.getElementById('start-menu').classList.add('hidden');
}

function navigateTo(section) {
    closeStartMenu();
    showSection(section);
}

function minimizeWindow() {
    const window = document.querySelector('.windows-window');
    window.style.transform = 'scale(0.95)';
    window.style.opacity = '0.8';
    setTimeout(() => {
        window.style.transform = '';
        window.style.opacity = '';
    }, 300);
}

function maximizeWindow() {
    const window = document.querySelector('.windows-window');
    window.classList.toggle('maximized');
}

function closeWindow() {
    const window = document.querySelector('.windows-window');
    window.style.transform = 'scale(0.9)';
    window.style.opacity = '0';
    setTimeout(() => {
        window.style.transform = '';
        window.style.opacity = '';
    }, 300);
}

function openSystemInfo() {
    showSection('skills');
    closeStartMenu();
}

function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.project-card, .skill-item, .blog-entry').forEach(el => {
        observer.observe(el);
    });
}

// Form submission
document.addEventListener('submit', (e) => {
    if (e.target.tagName === 'FORM') {
        e.preventDefault();
        alert('Message sent! (This is a demo)');
    }
});
// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.setAttribute('data-theme', 'dark');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle Function
darkModeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// PDF Viewer
function openPDF(pdfPath) {
    const modal = document.getElementById('pdfModal');
    const iframe = document.getElementById('pdfViewer');
    iframe.src = pdfPath;
    modal.style.display = 'block';
}

function closePDF() {
    const modal = document.getElementById('pdfModal');
    modal.style.display = 'none';
    document.getElementById('pdfViewer').src = '';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('pdfModal');
    if (event.target === modal) {
        closePDF();
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
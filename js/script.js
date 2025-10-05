// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Auto year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Contact form validation
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name.length < 3 || !email.includes('@') || message.length < 10) {
      alert('Please fill out the form correctly.');
    } else {
      formSuccess.textContent = '✅ Message sent successfully!';
      formSuccess.style.display = 'block';
      contactForm.reset();
      setTimeout(() => formSuccess.style.display = 'none', 3000);
    }
  });
}

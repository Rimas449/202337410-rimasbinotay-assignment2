// select interactive elements from the DOM
const themeToggleBtn = document.getElementById('theme-toggle');
const contactForm = document.getElementById('contact-form');

// check if user previously saved a theme preference in localStorage
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'dark') {
  document.body.setAttribute('data-theme', 'dark');
  themeToggleBtn.textContent = '☀️';
} else {
  themeToggleBtn.textContent = '🌙';
}

// toggle between light and dark modes when the button is clicked
themeToggleBtn.addEventListener('click', () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';

  if (isDark) {
    document.body.removeAttribute('data-theme');
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('portfolio-theme', 'light');
  } else {
    document.body.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️';
    localStorage.setItem('portfolio-theme', 'dark');
  }
});

// handle the contact form submission without refreshing the page
contactForm.addEventListener('submit', (event) => {
  // prevent default page reload behavior
  event.preventDefault();

  // grab values from the inputs
  const nameInput = document.getElementById('name').value;

  // show confirmation alert message to the user
  alert(`Thank you, ${nameInput}! Your message has been received.`);

  // reset form fields after submission
  contactForm.reset();
});
// Select interactive elements
const themeToggleBtn = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const emptyProjectsMessage = document.getElementById("empty-projects");
const formStatus = document.getElementById("form-status");

// Load the saved theme
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.setAttribute("data-theme", "dark");
  themeToggleBtn.textContent = "☀️";
} else {
  themeToggleBtn.textContent = "🌙";
}

// Toggle dark and light themes
themeToggleBtn.addEventListener("click", () => {
  const isDark =
    document.body.getAttribute("data-theme") === "dark";

  if (isDark) {
    document.body.removeAttribute("data-theme");
    themeToggleBtn.textContent = "🌙";
    localStorage.setItem("portfolio-theme", "light");
  } else {
    document.body.setAttribute("data-theme", "dark");
    themeToggleBtn.textContent = "☀️";
    localStorage.setItem("portfolio-theme", "dark");
  }
});

// Filter projects by category
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;
    let visibleProjects = 0;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.remove("active");
    });

    button.classList.add("active");

    projectCards.forEach((card) => {
      const shouldShow =
        selectedFilter === "all" ||
        card.dataset.category === selectedFilter;

    card.style.display = shouldShow ? "flex" : "none";

      if (shouldShow) {
        visibleProjects++;
      }
    });

    emptyProjectsMessage.hidden = visibleProjects > 0;
  });
});

// Validate and submit the contact form
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name").value.trim();
  const emailInput = document.getElementById("email").value.trim();
  const messageInput = document.getElementById("message").value.trim();

  if (!nameInput || !emailInput || !messageInput) {
    formStatus.textContent =
      "Please complete all fields before sending your message.";
    formStatus.className = "form-status error";
    return;
  }

  formStatus.textContent =
    `Thank you, ${nameInput}! Your message has been received.`;
  formStatus.className = "form-status success";

  contactForm.reset();
});

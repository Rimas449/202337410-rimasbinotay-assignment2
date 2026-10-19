# Technical Documentation

## 1. Project Overview
This project is my personal portfolio website that I built for Assignment 1[cite: 1]. The main goal was to create a clean, responsive single-page site using pure HTML, CSS, and JavaScript without relying on any external frameworks or libraries[cite: 1]. It introduces who I am, showcases two sample projects, and includes a working contact form[cite: 1].

---

## 2. Project Structure
I organized the repository into clear folders to keep everything easy to navigate[cite: 1]:

- `index.html`: The main page containing all the content and semantic sections (`header`, `main`, `section`, `footer`)[cite: 1].
- `css/styles.css`: All the styling rules, layout setups (Flexbox and Grid), and color variables for both light and dark themes[cite: 1].
- `js/script.js`: The script that handles interactive features like theme toggling and form submission[cite: 1].
- `assets/images/`: Folder kept for project images and assets[cite: 1].
- `docs/`: Contains this documentation and my AI usage reflection report[cite: 1].

---

## 3. How Things Work

### HTML Structure
- I divided the page into three main sections using IDs (`#about`, `#projects`, `#contact`) so the navigation links can smoothly scroll or jump to them[cite: 1].
- For the form, I made sure every input has an associated `<label>` using the `for` attribute so it is accessible and easy to use[cite: 1].
- I added the standard viewport meta tag in the `<head>` so the browser knows how to scale the page properly on mobile screens[cite: 1].

### CSS and Responsive Design
- **Theme Variables**: I created custom variables under `:root` for the light theme and updated them under `[data-theme="dark"]` for the dark theme[cite: 1]. This makes switching colors fast and clean[cite: 1].
- **Responsive Grid**: For the project cards, I used `display: grid` with `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`[cite: 1]. This allows the cards to wrap and resize automatically based on the screen width without needing a bunch of extra media queries[cite: 1].
- **Flexbox**: I used Flexbox on the navbar to push the logo and links apart, and also on the contact form to keep the inputs neatly stacked vertically[cite: 1].
- **Mobile Adjustments**: I added a simple media query at `max-width: 600px` to stack the navbar links vertically on phone screens and make buttons stretch to full width for easier tapping[cite: 1].

### JavaScript Features
- **Theme Toggle**: The script adds a click listener to the moon/sun button[cite: 1]. It toggles the `data-theme="dark"` attribute on the `<body>` element and saves the user preference in `localStorage` so the choice remains even after a page refresh[cite: 1].
- **Form Submission**: When the user clicks "Send Message", `event.preventDefault()` stops the browser from reloading the page[cite: 1]. Then it reads the user's name, pops up a friendly confirmation alert, and clears the form with `.reset()`[cite: 1].

---

## 4. How to Run the Project
1. Download or clone this repository to your computer[cite: 1].
2. Double-click `index.html` to open it directly in any web browser (like Chrome or Edge)[cite: 1].
3. You can also open the folder in VS Code and run it with the Live Server extension.
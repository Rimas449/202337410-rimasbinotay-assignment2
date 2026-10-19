# Personal Portfolio - Assignment 2

An interactive and responsive personal portfolio website built using HTML, CSS, and JavaScript.

This project improves the Assignment 1 portfolio by adding dynamic project filtering, theme preferences, form validation, user feedback, and smooth visual transitions.

## Features

- **Semantic HTML5**
  - Separate About, Projects, and Contact sections.
- **Responsive Design**
  - Uses CSS Grid and Flexbox for desktop, tablet, and mobile screens.
- **Dynamic Project Filtering**
  - Users can filter projects by All, Web, or API.
- **Dark and Light Theme**
  - Users can switch between dark and light mode.
  - The selected theme is saved using `localStorage`.
- **Contact Form Validation**
  - Checks that all fields are completed before submission.
  - Displays a success or error message without refreshing the page.
- **User Feedback**
  - Shows clear messages when the form is incomplete or successfully submitted.
  - Displays a message when no projects match a selected category.
- **Animations and Transitions**
  - Includes hover effects on project cards, buttons, and links.
  - Includes smooth color and movement transitions.
- **Accessibility**
  - Uses labels for form inputs.
  - Includes accessible status messages using `aria-live`.

## Project Structure

    ├── index.html
    ├── README.md
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── script.js
    ├── assets/
    │   └── images/
    └── docs/
        ├── ai-usage-report.md
        └── technical-documentation.md

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser `localStorage`
- GitHub Pages
- GitHub

## Setup and How to Run Locally

No build tools or installations are required.

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code or another code editor.
3. Open `index.html` in a web browser.
4. Alternatively, use the VS Code Live Server extension.

## How to Use the Website

### Change the Theme

Click the moon or sun button in the navigation bar to switch between light and dark mode.

The selected theme is saved automatically and remains active after refreshing the page.

### Filter Projects

Use the project filter buttons:

- **All** displays every project.
- **Web** displays web-based projects.
- **API** displays projects that use an API.

### Submit the Contact Form

Enter your name, email address, and message.

If a field is empty, an error message will appear. If all fields are completed, a confirmation message will appear.

## AI Usage

AI tools were used as learning and development assistants during this assignment.

ChatGPT helped with:

- Planning the interactive features.
- Suggesting JavaScript event-handling techniques.
- Debugging and improving the project filter.
- Improving form validation and user feedback.
- Reviewing the HTML structure and separating the Projects and Contact sections.
- Improving the README and technical documentation.

All AI-generated suggestions were reviewed, edited, and tested. I made sure I understood how the HTML, CSS, and JavaScript worked before using them in the project.

Detailed information is available in:

- [`docs/ai-usage-report.md`](docs/ai-usage-report.md)
- [`docs/technical-documentation.md`](docs/technical-documentation.md)

## Live Website

The website is deployed using GitHub Pages:

https://rimas449.github.io/202337410-rimasbinotay-assignment2/

## Author

Rimas Binotay

Student ID: 202337410

# Technical Documentation

## 1. Project Overview

This project is an interactive personal portfolio website created for Assignment 2.

It was developed using HTML5, CSS3, and JavaScript without external frameworks. The website includes About, Projects, and Contact sections.

The Assignment 2 improvements include:

- Dynamic project filtering.
- Dark and light theme switching.
- Saving the theme preference with `localStorage`.
- Contact-form validation.
- Success and error feedback messages.
- Hover effects and CSS transitions.
- Responsive design for different screen sizes.

## 2. Project Structure

The project is organized into separate folders:

- `index.html`: Contains the website structure and content.
- `css/styles.css`: Contains the layout, colors, responsive styles, hover effects, and transitions.
- `js/script.js`: Contains the theme toggle, project filtering, and contact-form validation.
- `assets/images/`: Stores image assets used by the website.
- `docs/ai-usage-report.md`: Documents how AI tools were used.
- `docs/technical-documentation.md`: Contains the technical documentation.
- `README.md`: Contains the project description, features, setup instructions, and AI summary.

## 3. HTML Structure

The HTML file uses semantic elements, including:

- `header` for the navigation bar.
- `nav` for navigation links and the theme button.
- `main` for the primary website content.
- `section` for the About, Projects, and Contact sections.
- `article` for individual project cards.
- `form` for the contact form.
- `footer` for copyright information.

The main sections are separated using these IDs:

- `#about`
- `#projects`
- `#contact`

The Projects section contains three filter buttons:

- All
- Web
- API

Each project card includes a `data-category` attribute. For example, a web project uses `data-category="web"`.

The Contact section contains fields for:

- Name
- Email
- Message

Each input has a connected label using the `for` and `id` attributes. This improves accessibility.

## 4. CSS and Responsive Design

### Theme Variables

The website uses CSS custom properties for colors.

The default light-theme variables are defined under `:root`.

The dark-theme variables are defined under `[data-theme="dark"]`.

JavaScript changes the appearance by adding or removing the `data-theme="dark"` attribute from the body.

### Responsive Layout

The project cards use CSS Grid with an automatic responsive layout. This allows the cards to resize and wrap depending on the screen width.

Flexbox is used for:

- The navigation bar.
- The navigation links.
- The contact form.
- The project filter buttons.

A media query is included for screens smaller than 600 pixels. It changes the navigation layout and makes the submit button easier to use on mobile devices.

### Animations and Transitions

Transitions are used to improve the user experience.

They are applied to:

- Theme color changes.
- Navigation link hover effects.
- Project card hover effects.
- Filter button hover effects.
- Submit button hover effects.

The project cards move slightly upward when the user hovers over them. The filter buttons also change color when selected.

## 5. JavaScript Features

### Theme Toggle

The theme button uses a click event listener.

When the button is clicked:

1. JavaScript checks whether dark mode is active.
2. The `data-theme="dark"` attribute is added or removed.
3. The button icon changes between a moon and a sun.
4. The selected theme is stored in `localStorage`.

When the page loads, JavaScript checks `localStorage` and restores the saved theme.

### Project Filtering

The project filter uses buttons with the class `.filter-btn`.

When a filter button is clicked:

1. JavaScript reads the button's `data-filter` value.
2. The active button receives the `active` CSS class.
3. JavaScript checks each project's `data-category` value.
4. Projects that match the selected category remain visible.
5. Projects that do not match are hidden.
6. An empty-state message appears if no projects match the filter.

The filtering is performed using the `hidden` property.

### Contact Form Validation

The contact form uses a submit event listener.

The following steps occur when the form is submitted:

1. `event.preventDefault()` stops the page from refreshing.
2. The name, email, and message values are read.
3. Extra spaces are removed using `.trim()`.
4. JavaScript checks whether all fields contain information.
5. An error message is shown if a field is empty.
6. A success message is shown if all fields are completed.
7. The form is reset after a successful submission.

The feedback message uses `aria-live="polite"` so that it can also be announced by assistive technologies.

## 6. User Feedback and Error Handling

The website provides feedback in several situations:

- An error message appears when the contact form is incomplete.
- A success message appears after a valid form submission.
- A message appears if no projects match the selected category.
- The theme button gives visual feedback by changing its icon.
- The selected project filter is shown using a different button style.

These messages help users understand what happened and what they should do next.

## 7. How to Run the Project

The project does not require build tools or external dependencies.

To run it locally:

1. Clone or download the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser.
4. Alternatively, install the Live Server extension in Visual Studio Code.
5. Right-click `index.html` and select Open with Live Server.

The website can also be viewed using the GitHub Pages deployment link in the README file.

## 8. Testing

The following features should be tested:

- The website opens correctly.
- Navigation links move to the correct sections.
- The dark/light theme button changes the theme.
- The selected theme remains after refreshing the page.
- The All filter displays both projects.
- The Web filter displays the web project.
- The API filter displays the API project.
- Empty form fields show an error message.
- Completed form fields show a success message.
- Project cards display correctly on mobile and desktop screens.
- Hover effects and transitions work correctly.

## 9. AI-Assisted Development

ChatGPT was used as a learning and development assistant.

It helped with:

- Planning the required Assignment 2 features.
- Creating the project-filter logic.
- Improving form validation and feedback.
- Reviewing the HTML structure.
- Separating the Projects and Contact sections.
- Creating CSS styles for buttons and messages.
- Updating the README and documentation.

The code was reviewed, edited, and adapted to fit the existing portfolio design. The final project was not submitted as unmodified AI-generated output.

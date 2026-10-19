# AI Usage Report

## 1. AI Tool Used

For this assignment, I used ChatGPT as a coding assistant, learning partner, and documentation helper.

I used ChatGPT to:

- Plan the required Assignment 2 features.
- Add a dynamic project filter using JavaScript.
- Improve the contact form validation and feedback messages.
- Add CSS styling, transitions, and hover effects.
- Review the HTML structure and separate the Projects and Contact sections.
- Update the README file for Assignment 2.
- Update the technical documentation and AI usage report.
- Receive guidance while creating and uploading the GitHub repository.

## 2. Features Added with AI Assistance

### Dynamic Project Filtering

ChatGPT helped me add filter buttons for the project section:

- All
- Web
- API

When a user selects a category, JavaScript checks the `data-category` value of each project card and hides projects that do not match the selected category.

### Dark and Light Theme

The original theme toggle was improved and kept in the project.

The selected theme is stored using browser `localStorage`. This allows the website to remember the user's theme preference after the page is refreshed.

### Contact Form Validation

The contact form was improved to:

- Check whether the name, email, and message fields are completed.
- Display an error message when a field is empty.
- Display a confirmation message when the form is submitted correctly.
- Prevent the page from refreshing during submission.

### User Feedback

The website now provides feedback directly on the page instead of relying only on a browser alert.

The project also includes an empty-state message if no projects match the selected filter.

### Animations and Transitions

CSS transitions were added to improve the user experience. These include:

- Hover effects on project cards.
- Hover effects on buttons.
- Smooth theme color changes.
- Small movement effects when buttons are selected or hovered.

## 3. Benefits of Using AI

AI assistance provided several benefits:

- It helped me plan the assignment requirements before making changes.
- It provided examples of JavaScript event listeners and DOM manipulation.
- It helped me understand how `data-*` attributes can be used for project filtering.
- It helped me improve form validation and user feedback.
- It helped identify the need to keep the Projects and Contact sections separate.
- It helped me organize and update the project documentation.
- It helped me troubleshoot the GitHub repository upload and folder structure.

## 4. Challenges and Manual Improvements

The AI-generated suggestions were not used without review.

I made several manual decisions and improvements:

- I kept the existing portfolio design instead of rebuilding the entire website.
- I changed the project cards to include `data-category` attributes.
- I selected which projects belonged to the Web and API categories.
- I replaced the browser alert with an on-page form status message.
- I reviewed the HTML to ensure the Projects and Contact sections were separate.
- I kept the code simple and suitable for the assignment.
- I checked that the file paths matched the project folder structure.
- I removed unnecessary or overly complicated suggestions.
- I edited the documentation so it describes my actual project.

## 5. Learning Outcomes

Through this assignment, I learned:

- How to use JavaScript event listeners to respond to button clicks.
- How to use `querySelectorAll()` to select multiple elements.
- How to use `data-*` attributes to store category information in HTML.
- How to show and hide elements using JavaScript.
- How to use the `hidden` property in JavaScript.
- How to update text and CSS classes dynamically.
- How to validate form input before accepting a submission.
- How to use `event.preventDefault()` to stop a form from refreshing the page.
- How to use `localStorage` to save a user preference.
- How CSS transitions and hover effects improve user experience.
- How to organize a project using separate HTML, CSS, JavaScript, assets, and documentation folders.

## 6. Responsible Use of AI

I used ChatGPT as a support tool rather than submitting unmodified AI-generated work.

I worked through the project step by step and reviewed the suggested code before using it. I modified the code to match my existing portfolio, selected the project categories, edited the website text, and updated the documentation.

I also asked for explanations when I did not understand a step. This helped me learn how the HTML, CSS, and JavaScript work together.

The final project contains changes that were reviewed and adapted for my portfolio and assignment requirements.

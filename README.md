# Web-APIs-04

# Personal Blog

## Description

This project is a two-page personal blog site where users can input and view blog posts. The challenge involves building a content form, dynamically rendering blog posts, and implementing a light/dark mode toggle. This project is designed to help you gain practical JavaScript experience, explore the power of the Document Object Model (DOM), and set the stage for more advanced tasks.

## User Story

**AS A** marketing student  
**I WANT** a personal blog  
**SO THAT** I can showcase my thoughts and experiences

## Acceptance Criteria

- **GIVEN** a personal blog  
  **WHEN** I load the app,  
  **THEN** I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.

- **WHEN** I submit the form,  
  **THEN** blog post data is stored to localStorage.

- **WHEN** the form submits,  
  **THEN** I am redirected to the posts page.

- **WHEN** I try to submit a form without a username, title, or content,  
  **THEN** I am presented with a message that prompts me to complete the form.

- **WHEN** I view the posts page,  
  **THEN** I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.

- **WHEN** I click the light mode/dark mode toggle,  
  **THEN** the page content's styles update to reflect the selection.

- **WHEN** I click the "Back" button,  
  **THEN** I am redirected back to the landing page where I can input more blog entries.

- **WHEN** I view the main content,  
  **THEN** I am presented with a list of blog posts that are pulled from localStorage.

- **WHEN** I view localStorage,  
  **THEN** I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.

- **WHEN** I take a closer look at a single blog entry in the list,  
  **THEN** I can see the title, the content, and the author of the post.

- **WHEN** I view the footer,  
  **THEN** I am presented with a link to the developer's portfolio.

## File Structure

```plaintext
my-blog
├── assets
│   ├── css
│   │   ├── blog.css
│   │   ├── form.css
│   │   └── styles.css
│   └── js
│       ├── blog.js
│       ├── form.js
│       └── logic.js
├── index.html
├── blog.html
└── README.md
```

## Usage

1. **Landing Page:** 
   - The user is presented with a form to enter their username, blog title, and blog content.
   - Upon submission, the blog post data is stored in localStorage and the user is redirected to the posts page.

2. **Posts Page:**
   - Displays a list of blog posts retrieved from localStorage.
   - Includes a light mode/dark mode toggle and a "Back" button to return to the landing page.
   - Each blog entry shows the title, content, and author.
   - The footer includes a link to the developer's portfolio.

## Installation

To run the project locally:

1. Clone the repository.
2. Navigate to the project directory.
3. Open `index.html` in your preferred web browser.

## License

This project is licensed under the MIT License.

---

// Get the form element
const form = document.querySelector('form');

// Add event listener to the form submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the user input values
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create a post object
    const post = {
        username,
        title,
        content
    };

    // Get the existing posts from local storage (if any)
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Push the new post to the posts array
    posts.push(post);

    // Save the updated posts array to local storage
    localStorage.setItem('posts', JSON.stringify(posts));

    // Optional: Log the posts array to the console
    console.log(posts);
// Get the form element
const form = document.querySelector('form');

// Add event listener to the form submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the user input values
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create a post object
    const post = {
        username,
        title,
        content
    };

    // Get the existing posts from local storage (if any)
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Push the new post to the posts array
    posts.push(post);

    // Save the updated posts array to local storage
    localStorage.setItem('posts', JSON.stringify(posts));

    // Optional: Log the posts array to the console
    console.log(posts);

    // Reset the form
    form.reset();

    // Redirect the user to the blog page
    window.location.href = 'blog.html';

    // Optional: Show a success message to the user
    // alert('Blog post submitted successfully!');
});
    // Reset the form
    form.reset();

    // Redirect the user to the blog page
    window.location.href = 'blog.html';

    // Optional: Show a success message to the user
    // alert('Blog post submitted successfully!');
});
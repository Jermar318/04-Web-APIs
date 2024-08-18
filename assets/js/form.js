const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit');
const postArray = [];

// Save the post to local storage
function savePost() {
    const post = {
        username: username.value,
        title: title.value,
        content: content.value.trim(),
    };
    postArray.push(post);
    localStorage.setItem('post', JSON.stringify(post));
    console.log(post);
}
// Get the post from local storage
function getPost() {
    const post = JSON.parse(localStorage.getItem('post'));
    // If the post is not null, display the post
    if (post !== null) {
       document.getElementById('username').innerHTML = post.username;
       document.getElementById('title').innerHTML = post.title;
       document.getElementById('content').innerHTML = post.content;
    }
}
// Event listener for the submit button
submitButton.addEventListener('submit',function (event) {
    event.preventDefault();
    savePost();
    window.location.href = 'blog.html';
});

// Initialize the page
function init() {
    getPost();
}
init();
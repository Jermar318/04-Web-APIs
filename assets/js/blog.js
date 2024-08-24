// Get the post container element
const postContainer = document.getElementById('post-container');

// Get the pagination element
const pagination = document.getElementById('pagination');

// Function to display posts
function displayPosts(pageNumber) {
    const posts = getPostsFromLocalStorage(pageNumber);

    // Clear the post container
    postContainer.innerHTML = '';

    // Display 10 posts per page
    const startIndex = (pageNumber - 1) * 10;
    const endIndex = startIndex + 10;

    // Loop through the posts and create HTML elements
    for (let i = startIndex; i < endIndex; i++) {
        if (i >= posts.length) {
            break;
        }

        const post = posts[i];

        // Create a post element
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>Author: ${post.username}</p>
        `;

        // Append the post element to the post container
        postContainer.appendChild(postElement);
    }

    // Update the pagination
    updatePagination(pageNumber, posts.length);
}

// Function to update the pagination
function updatePagination(currentPage, totalPosts) {
    // Clear the pagination
    pagination.innerHTML = '';

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalPosts / 10);

    // Create pagination buttons
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.addEventListener('click', () => {
            displayPosts(i);
        });
        pagination.appendChild(button);
    }

    // Highlight the current page button
    const currentPageButton = pagination.querySelector(`button:nth-child(${currentPage})`);
    currentPageButton.classList.add('active');
}

// Function to get posts from local storage
function getPostsFromLocalStorage() {
    const posts = JSON.parse(localStorage.getItem('posts'));
    return posts ? posts : [];
}

// Display the initial page
displayPosts(1);

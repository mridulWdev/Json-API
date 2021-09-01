// function dataLoad() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => displayUser(data))
// }

// function displayUser(data) {
//     const ul = document.getElementById('users');

//     for (const user of data) {
//         console.log(user.name);

//         const li = document.createElement('li');
//         li.innerText = `name; ${user.name} Email: ${user.email}`;
//         ul.appendChild(li);
//     }
// }

// function photoLoad() {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//         .then(response => response.json())
//         .then(photo => thumbnailLoader(photo))
// }

// function thumbnailLoader(photo) {
//     console.log(photo);
//     for (const pics of photo) {
//         console.log(pics.id);
//     }
// }

function showData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(posts) {
    const postContainer = document.getElementById('posts')
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
        console.log(post);
    }
}
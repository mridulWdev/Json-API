function dataLoad() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data))
}

function displayUser(data) {
    const ul = document.getElementById('users');

    for (const user of data) {
        console.log(user.name);

        const li = document.createElement('li');
        li.innerText = `name; ${user.name} Email: ${user.email}`;
        ul.appendChild(li);
    }
}

function photoLoad() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(photo => thumbnailLoader(photo))
}

function thumbnailLoader(photo) {
    console.log(photo);
    for (const pics of photo) {
        console.log(pics.id);
    }
}
const booksContainer = document.querySelector(".books-container");
const authorsContainer = document.querySelector(".authors-container");


fetch("../db/books.json")
    .then(response => response.json())
    .then(data => {
        data.map((item, index) => {
            if (index < 8) {
                booksContainer.innerHTML +=
                    `
                <div class="book read">
                    <div class="cover">
                        <img src=${item.image}>
                    </div>
                    <div class="summary">
                        <p class="title">${item.title}<br>
                            <span class="author">${item.author}</span>
                            <div>Qiyməti: ${item.price.displayValue}</div>
                        </p>
                    </div>
                </div>
            `
            }
        })
    })
    .catch(err => console.error(err));

fetch("../db/authors.json")
    .then(response => response.json())
    .then(data => {
        data.map((item, index) => {
            authorsContainer.innerHTML +=
                `
                <div class="card">
                    <img src=${item.image} alt=${item.name}>
                    <h3>${item.name}</h3>
                    <p class="bio">${item.biography}</p>
                    <button class="read-more-btn">Read More</button>
                </div>
            `
        })
    })
    .catch(err => console.error(err));

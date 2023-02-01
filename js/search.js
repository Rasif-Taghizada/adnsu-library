const bookList = document.querySelector("#list-body");
const searchBar = document.querySelector("#search-input");
let hpCharacters = [];
console.log(searchBar.value);

searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredCharacters = hpCharacters.filter((character) => {
        return character.title.includes(searchString)
    })
    displayCharacters(filteredCharacters);
    console.log(filteredCharacters);
})


const loadCharacters = async () => {
    try {
        const res = await fetch('/db/books.json');
        hpCharacters = await res.json();
        console.log(hpCharacters);
        displayCharacters(hpCharacters);
        // console.log(hpCharacters);
    } catch (error) {
        console.error(error)
    }
}

const displayCharacters = (characters) => {
    const htmlString = characters.map((character,index) => {
        if(index < 6){
            return `
                <tr>
                    <td class="item">
                        <a href="#">${character.title}</a>
                    </td>
                    <td class="item">
                        <a href="#">${character.author}</a>
                    </td>
                    <td class="item">
                        <a href="#">${character.price.janr}</a>
                    </td>
                    <td class="item">
                        <a href="#">${character.price.displayValue}</a>
                    </td>
                </tr>
            `
        }
    }).join('');
    bookList.innerHTML = htmlString;
}

loadCharacters();
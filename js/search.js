const bookList = document.querySelector("#list-body");
const searchBar = document.querySelector("#search-input");
const dropdown = document.querySelector(".dropdown");
let searchOption = "title";

dropdown.addEventListener('change', selectFilter)
function selectFilter(e){
    console.log(e.target.value)
    if(e.target.value === "title"){
        searchBar.addEventListener("keyup", (e) => {
            const searchString = e.target.value.toLowerCase();
            const filteredCharacters = hpCharacters.filter((character) => {
                return character.title.toLowerCase().includes(searchString)
            })
            displayCharacters(filteredCharacters);
        })
    }
    else if(e.target.value === "janr"){
        searchBar.addEventListener("keyup", (e) => {
            const searchString = e.target.value.toLowerCase();
            const filteredCharacters = hpCharacters.filter((character) => {
                return character.janr.toLowerCase().includes(searchString)
            })
            displayCharacters(filteredCharacters);
        })
    }
    else if(e.target.value === "author"){
        searchBar.addEventListener("keyup", (e) => {
            const searchString = e.target.value.toLowerCase();
            const filteredCharacters = hpCharacters.filter((character) => {
                return character.author.toLowerCase().includes(searchString)
            })
            displayCharacters(filteredCharacters);
        })
    }
    else if(e.target.value === "displayValue"){
        searchBar.addEventListener("keyup", (e) => {
            const searchString = e.target.value.toLowerCase();
            const filteredCharacters = hpCharacters.filter((character) => {
                return character.price.displayValue.toLowerCase().includes(searchString)
            })
            displayCharacters(filteredCharacters);
        })
    }
}

let hpCharacters = [];




const loadCharacters = async () => {
    try {
        const res = await fetch('/db/books.json');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (error) {
        console.error(error)
    }
}

const displayCharacters = (characters) => {
    const htmlString = characters.map((character,index) => {
        if(index < 6){
            return `
                <tr class="data ">
                    <td class="item">
                        <a href="#">${character.title}</a>
                    </td>
                    <td class="item">
                        <a href="#">${character.author}</a>
                    </td>
                    <td class="item">
                        <a href="#">${character.janr}</a>
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

/* 
if(e.target.value === "janr"){
                return character.janr.toLowerCase().includes(searchString)
            }
            else if(e.target.value === "title"){
                return character.title.toLowerCase().includes(searchString)
            }
            else if(e.target.value === "displayValue"){
                return character.price.displayValue.toLowerCase().includes(searchString)
            }
            else if(e.target.value === "author"){
                return character.author.toLowerCase().includes(searchString)
            }
*/
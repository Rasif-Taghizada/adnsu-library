const bookList = document.querySelector("#list-body");
let hpCharacters = [];

const loadCharacters = async () => {
    try {
        const res = await fetch('/db/data.json');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (error) {
        console.error(error)
    }
}


function displayCharacters(characters) {
    return characters.map((data, index) => {
        bookList.innerHTML +=
            `
                <tr class="book ${data.janr.slice(0, 5).toLowerCase()}">
                    <td class="item title">
                        <a href="#">${data.title}</a>
                    </td>
                    <td class="item author">
                        <a href="#">${data.author}</a>
                    </td>
                    <td class="item janr">
                        <a href="#">${data.janr}</a>
                    </td>
                </tr>
            `
    })
}

const searchFilter = () => {
    const selectedJanr = document.querySelector("#filterByJanr").value.slice(0, 5);
    console.log(selectedJanr);
    const input = document.querySelector("#search-input");
    const booksData = document.getElementsByClassName("book")
    let textBox = input.value;
    for (let i = 0; i < booksData.length; i++) {
        let className = booksData[i].querySelector(".title");
        if (
            (booksData[i].classList.contains(selectedJanr) ||
                selectedJanr == "") &&
            className.innerText.toLowerCase().indexOf(textBox.toLowerCase()) > -1
        ) {
            booksData[i].classList.remove("hide");
        } else {
            booksData[i].classList.add("hide");
        }
    }
}
loadCharacters();
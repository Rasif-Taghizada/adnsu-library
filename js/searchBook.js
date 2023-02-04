const bookList = document.querySelector("#list-body");
let filteredCharacters = [];
const select = document.querySelector("#filterByJanr");
const input = document.querySelector("#search-input");



document.addEventListener("DOMContentLoaded",()=>{
    input.addEventListener("input",searchFilterByInput);
    select.addEventListener("change",searchFilterByOption);

})

const filterDatasBySelect = genre =>{
    loadCharacters()
    .then(data =>{
        bookList.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            if (
                data[i].janr.toLowerCase() === genre){
                    bookList.innerHTML +=`
                    <tr class="book ${data[i].janr.toLowerCase().slice(0,3)}">
                        <td class="item title">
                            <a href="#">${data[i].title}</a>
                        </td>
                        <td class="item author">
                            <a href="#">${data[i].author}</a>
                        </td>
                        <td class="item janr">
                            <a href="#">${data[i].janr}</a>
                        </td>
                    </tr>`;
            }
        }
        input.value = "";
    }    
    )
    .catch(err => console.log(err))
}
const loadCharacters = async () => {
    const response = await fetch('/db/data.json');
    const data = await response.json();
    return data;
}
const searchFilterByOption = () => {
    const selectedJanr =select.options[select.selectedIndex].textContent.toLowerCase();

    filterDatasBySelect(selectedJanr)
}
const filterDatasByİnput = (header,genre) =>{
    try{
        if (genre === "jan"){
            alert("Janrı seçin: ")
        }
        else{
                const books = document.querySelectorAll(`.${genre}`);
            for(let i=0; i<=books.length;i++){
                if((!books[i].firstElementChild.innerText.toLowerCase().includes(header))){
                    books[i].classList.add("hide");
                }
                else{
                    books[i].classList.remove("hide");
                }

            }
        }
    }
    catch{
    }
}
const searchFilterByInput = e =>{
    let textBox = input.value.toLowerCase();
    filterDatasByİnput(textBox,select.options[select.selectedIndex].textContent.toLowerCase().slice(0,3));
    e.preventDefault();
}

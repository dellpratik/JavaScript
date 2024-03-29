const accessKey = "Sg4C6gsJdzz_RYdvNvUhcWhvj837ZTIyIY8IdgquaCw";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {

    try
    {
        inputData = inputEl.value;
        console.log("Input Data is ", inputData);
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
        console.log("Final URL is ", url);

        const response = await fetch(url);
        console.log("Response Is ", response);

        const data = await response.json();
        console.log("Response Data Is ", data);

        const results = data.results;

        if (page === 1) {
            searchResults.innerHTML = "";
        }

        results.map((result)=>{
            const imageWrapper = document.createElement("div");
            imageWrapper.classList.add("search-result");
            
            const image = document.createElement("img");
            image.src = result.urls.small;
            image.alt = result.alt_description;

            const imageLink = document.createElement("a");
            imageLink.href = result.links.html; 
            imageLink.target = "_blank";
            imageLink.textContent = result.alt_description;

            imageWrapper.appendChild(image);
            imageWrapper.appendChild(imageLink);            
            searchResults.appendChild(imageWrapper);

        });

        page++;

        if (page > 1) {
            showMore.style.display = "block";
        }
    }
    catch(error)
    {
        console.log("Error is ", error);
    }

}


// searchImages();

formEl.addEventListener("submit", (event)=> {
    event.preventDefault();
    page = 1;
    console.log("Submit Button Pressed !!!");
    searchImages();
})


showMore.addEventListener("click", ()=> {
    searchImages();
})

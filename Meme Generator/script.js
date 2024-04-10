const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");

const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const generateMeme = async ()=> {

    // fetch("https://meme-api.com/gimme").then(resnponse => resnponse.json()).then(data => {
    //     // updateDetails(data.url, data.title, data.author);
    //     console.log("URL Is ", data.url);
    //     console.log("Title Is ", data.title);
    //     console.log("Author Is ", data.author);
    // });

    const tempResponse = await fetch("https://meme-api.com/gimme");
    console.log("Response is ", tempResponse);

    const data = await tempResponse.json();
    console.log("Data in Json is ", data);

    updateDetails(data.url, data.title, data.author);

};

generateMemeBtn.addEventListener("click", generateMeme);

const updateDetails = (url, title, author)=> {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
}
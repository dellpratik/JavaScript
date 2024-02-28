const apiKey = '9c7d4d856a514c6e8b95b3714fddf235';

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews() {
    try{
        // const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`

        // const apiUrl = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`;

        const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}&pageSize=10`
        
        console.log('API URL should be ', apiUrl);
        const response = await fetch(apiUrl);
        const data = await response.json();
        // console.log('Data feteched is ', data);
        return data.articles;

    } catch(error) {
        console.log("Error  fetching data", error);
        return [];
    }
}


function displayBlogs(articles) {

    blogContainer.innerHTML = "";

    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        
        const title = document.createElement("h2");
        // title.textContent = article.title;
        const truncatedTitle = article.title.length > 30 ? article.title.slice(0,30) + "...." : article.title ;
        title.textContent = truncatedTitle ; 

        const description = document.createElement("p");
        // description.textContent = article.description;
        const truncatedDescription = article.description.length > 120 ? article.description.slice(0,120) + "...." : article.description ; 
        description.textContent = truncatedDescription ; 

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.addEventListener('click', ()=> {
            window.open(article.url, "_blank");
        });

        blogContainer.appendChild(blogCard);

    })
}


// (async ()=>{
//     try{
//         const articles = await fetchRandomNews();
//         // console.log(articles);
//         displayBlogs(articles);

//     }catch(error) {
//         console.log("Error  fetching data", error);
//         return [];
//     }
// })();


const someF = async function someFunction()
{
    try
    {
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    }
    catch(error)
    {
        console.log("Error fetching data", error);
        return [];
    }
};


someF();
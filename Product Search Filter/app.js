const search = ()=> {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    // console.log(searchBox);
    const storeItems = document.getElementById("product-list");
    // console.log(storeItems);
    const product = document.querySelectorAll(".product");
    // console.log(product);
    const productName = document.getElementsByTagName("h2");
    // console.log(productName);

    for(var i=0; i < productName.length; i++) {
        let match = productName[i];
        // console.log(match);

        if(match) {
            let textValue = match.textContetnt || match.innerText ;
            // console.log(textValue);

            console.log(textValue.toUpperCase().indexOf(searchBox));
            
            if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                console.log(product[i]);
                product[i].style.display = "";
            }
            else {
                product[i].style.display = "none";
            }
        }
    }

}
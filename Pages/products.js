// Products page search 

var productContainer = document.getElementById("product-container");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div")


    search.addEventListener("keyup", function () {
        var enteredValue = event.target.value.toUpperCase()
        // console.log(enteredValue)

        for (count = 0; count<productList.length; count = count + 1) {
            var productName = productList[count].querySelector("h1").textContent

            if (productName.toUpperCase().indexOf(enteredValue) < 0) {
                productList[count].style.display="none";
            }
            else{
                productList[count].style.display="block";
            }
        }

 })
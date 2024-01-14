// Script
var sideNavBar = document.querySelector(".side-navbar")


function showNavBar()
{
    sideNavBar.style.left = "0"
}

function closeNavBar()
{
    sideNavBar.style.left = "-60%"
}

var productContainer = document.getElementById('product')
var search = document.getElementById('search')
var productList = productContainer.querySelectorAll('div')

search.addEventListener('keyup', function(event){
    var enteredValue = event.target.value.toUpperCase()
    for(var i=0; i<productList.length; i++)
    {
        var productName = productList[i].querySelector("p").textContent
        if(productName.toUpperCase().indexOf(enteredValue) < 0)
        {
            productList[i].style.display = "none"
        }
        else{
            productList[i].style.display = "block"
        }
    }
})
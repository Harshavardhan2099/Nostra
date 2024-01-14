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

var menProductContainer = document.querySelector('.menProducts')
var womenProductContainer = document.querySelector('.womenProducts')
var kidProductContainer = document.querySelector('.kidProducts')

var search = document.getElementById('search')

var menProductsList = menProductContainer.querySelectorAll('div')
var womenProductsList = womenProductContainer.querySelectorAll('div')
var kidProductsList = kidProductContainer.querySelectorAll('div')
var infoList = document.querySelectorAll('.info')


search.addEventListener('keyup', function(event){
    var enteredValue = event.target.value.toUpperCase()

    for (let index = 0; index < infoList.length; index++) {
        infoList[index].style.display = "none"        
    }
    for(var i=0; i<menProductsList.length; i++)
    {
        var menProductName = menProductsList[i].querySelector("p").textContent
        if(menProductName.toUpperCase().indexOf(enteredValue) < 0)
        {
         menProductsList[i].style.display = "none"
        }
        else{
         menProductsList[i].style.display = "block"
        }

        var womenProductName = menProductsList[i].querySelector("p").textContent
        if(womenProductName.toUpperCase().indexOf(enteredValue) < 0)
        {
         womenProductsList[i].style.display = "none"
        }
        else{
         womenProductsList[i].style.display = "block"
        }

        var kidProductName = kidProductsList[i].querySelector("p").textContent
        if(kidProductName.toUpperCase().indexOf(enteredValue) < 0)
        {
         kidProductsList[i].style.display = "none"
        }
        else{
         kidProductsList[i].style.display = "block"
        }
    }
})
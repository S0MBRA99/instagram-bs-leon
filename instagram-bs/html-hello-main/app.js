const btnGrid = document.getElementById("btnGrid")
const btnList = document.getElementById("btnList")
const content = document.getElementById("content")

btnGrid.addEventListener("click",function(){
    for(const item of content.children){
        item.classList.remove("col-12")
        item.classList.add("col-lg-4","col-md-6", "col-sm-12")
         
        const card = item.querySelector(".card")
        card.classList.remove("w-50")
        card.classList.add("w-100")
        
        const elemtsToHide = card.querySelectorAll(".card-header, .card-body")
        elemtsToHide.forEach(element => element.style.display="none") 
    }
})

btnList.addEventListener("click",function(){
    for(const item of content.children){
        item.classList.remove("col-lg-4","col-md-6", "col-sm-12")
        item.classList.add("col-12")
    
        const card = item.querySelector(".card")
        card.classList.remove("w-100")
        card.classList.add("w-50")
        
        const elementsToShow = card.querySelectorAll(".card-header, .card-body")
        elementsToShow.forEach(element => element.style.display="")
    }
})
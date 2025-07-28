const btnGrid = document.getElementById("btnGrid")
const btnList = document.getElementById("btnList")
const content = document.getElementById("content")

btnGrid.addEventListener("click",function(){
    for(const item of content.children){
        item.classList.remove("col-12")
        item.classList.add("col-4")
        
        for(const itemTag of item.children){
            itemTag.classList.remove("w-50")
            itemTag.classList.add("w-100")
        }
    }
}
)

btnList.addEventListener("click",function(){
    for(const item of content.children){
        console.log(content.children)
        item.classList.remove("col-4")
        item.classList.add("col-12")
        
        for(const itemTag of item.children){
            itemTag.classList.remove("w-100")
            itemTag.classList.add("w-50")
        }
    }
}
)
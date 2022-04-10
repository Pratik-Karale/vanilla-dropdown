import "./style.css"


function turnToHtml(str){
    let temp_div=document.createElement("div")
    temp_div.innerHTML=str
    return temp_div.querySelector("*:nth-child(1)")
}

function addDropDownBtn(){
    const btn=turnToHtml(`<div class="drop-down-btn">bruh</div>`)
    btn.style.height="30px"
    btn.style.position="relative"
    // btn.addEventListener("mouseover",addDropdown)
    addDropdown({target:btn})
    // btn.addEventListener("mouseleave",deleteDropdown)
    document.body.appendChild(btn)
}

function addDropDownLinks(dropdownElem,linksObj){
    console.log(linksObj)
    // linksObj={"yo":"https://google.com"}
    for(const [name,link] of Object.entries(linksObj)){
        dropdownElem.appendChild(turnToHtml(`
        <li class="dropdown-link"><a href="${link}">${name}</a></li>
        `))
    }
}


function addDropdown(evt){
    const dropdownElem=turnToHtml(`<ul class="dropdown"></ul>`)
    dropdownElem.style.position="absolute"
    dropdownElem.style.right=0
    console.log(evt.target.offsetHeight)
    dropdownElem.style.top=evt.target.offsetHeight
    evt.target.appendChild(dropdownElem)
    console.log("addDropDownBtn")
    addDropDownLinks(dropdownElem,{"yo":"https://google.com","bo":"github.com"})
}

function deleteDropdown(){
    document.querySelector(".dropdown").remove()
}


addDropDownBtn()
function turnToHtml(str){
    let temp_div=document.createElement("div")
    temp_div.innerHTML=str
    return temp_div.querySelector("*:nth-child(1)")
}

function addDropDownBtn(){
    const btn=turnToHtml(`<button class="drop-down-btn">bruh</button>`)
    btn.style.height="30px"
    btn.style.position="relative"
    btn.addEventListener("mouseenter",addDropdown)
    btn.addEventListener("mouseleave",deleteDropdown)
    document.body.appendChild(btn)
}

function addDropDownLinks(dropdownElem,linksObj){
    console.log(linksObj)
    linksObj={"yo":"https://google.com"}
    for(const [name,link] of Object.entries(linksObj)){
        dropdownElem.appendChild(turnToHtml(`
        <li class="dropdown-link"><a href="${link}">${name}</a></li>
        `))
    }
}


function addDropdown(evt){
    dropdownElem=turnToHtml(`<ul class="dropdown"></ul>`)
    addDropDownLinks(dropdownElem)
    dropdownElem.style.position="absolute"
    dropdownElem.style.right=0
    dropdownElem.style.bottom=10
    evt.target.appendChild(dropdownElem)
    addDropDownLinks(dropdownElem,{"yo":"https://google.com"})
}

function deleteDropdown(){
    // document.querySelector(".dropdown").remove()
}


addDropDownBtn()
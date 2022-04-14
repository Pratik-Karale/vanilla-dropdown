function turnToHtml(str) {
    let temp_div = document.createElement("div")
    temp_div.innerHTML = str
    return temp_div.querySelector("*:nth-child(1)")
}



function getMainContainer(btnName) {
    return turnToHtml(`
    <div class="dropdown-container">
      <div class="dropdown-btn">${btnName}</div>
      <ul class="dropdown-links">
      </ul>
    </div>
`)
}

function removeLinkElems(dropdownContainer) {
    dropdownContainer.querySelector(".dropdown-links").replaceChildren()
}

function addLinkElems(links, dropdownContainer) {
    const dropdownLinksElem = dropdownContainer.querySelector(".dropdown-links")
    for (const linkName in links) {
        dropdownLinksElem.appendChild(turnToHtml(`<li class="dropdown-link"><a href="${links[linkName]}">${linkName}</a></li>`))
    }
}

function addStyles(){
    window.document.styleSheets[0].insertRule(`
    .dropdown-btn{
        display: inline-block;
        background-color: aqua;
        padding: 1em;
    }
    
    .dropdown-container{
        position:relative;
        display: inline-block;
        background-color: #64ccff;
        margin:1em;
    }
    
    .dropdown-links.active{
        background-color: #64ccff;
        padding: 1em;
        width:50vw;
        position: absolute;
        left:0px;
        top:100%;
    }`,0)
}

function make(btnName,links) {
    addDropdownStyles()
    const dropdownContainer = getMainContainer(btnName)
    const dropdownLinksElem = dropdownContainer.querySelector(".dropdown-links")
    const dropdownBtn = dropdownContainer.querySelector(".dropdown-btn")

    dropdownBtn.addEventListener("mouseenter", () => {
        addLinkElems(links, dropdownContainer)
        dropdownLinksElem.classList.add("active")
    })
    dropdownContainer.addEventListener("mouseleave", () => {
        console.log(dropdownBtn.clientHeight + "1")
        setTimeout(() => {
            if (!dropdownLinksElem.matches(":hover")) {
                removeLinkElems(dropdownContainer)
                dropdownLinksElem.classList.remove("active")
            }
        }, 140)
    })
    return dropdownContainer
}

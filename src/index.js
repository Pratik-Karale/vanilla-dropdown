import "./style.css"


function turnToHtml(str) {
    let temp_div = document.createElement("div")
    temp_div.innerHTML = str
    return temp_div.querySelector("*:nth-child(1)")
}



function getDropdownContainer() {
    return turnToHtml(`
    <div class="dropdown-container">
      <div class="dropdown-btn">bruh bruh btn</div>
      <ul class="dropdown-links">
      <li>wew</li>
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

function makeDropdown(links) {
    const stateIsActive = false
    const dropdownContainer = getDropdownContainer()
    let dropdownBtn = dropdownContainer.querySelector(".dropdown-btn")
    dropdownBtn.addEventListener("mouseenter", () => {
        addLinkElems(links, dropdownContainer)
    })
    dropdownContainer.addEventListener("mouseleave", () => {
        console.log(1010)
        const dropdownLinksElem=dropdownContainer.querySelector(".dropdown-links")
        setTimeout(()=>{
            if(!dropdownLinksElem.matches(":hover")){
                removeLinkElems(dropdownContainer)
            }
        },500)
    })
    return dropdownContainer
}

document.body.appendChild(makeDropdown({ a: "https://google.com","b":"https://youtube.com" }))

let searchInputEl = document.getElementById("searchInput")

let searchResultsContainer = document.getElementById("searchResults");

let loaderEl = document.getElementById("spinner")
function DisplayingTheResults(obj) {
   console.log(obj)
   let {link,title,description} = obj
   let contentDiv = document.createElement("div")
   contentDiv.classList.add("result-item")
   

   let titleEl = document.createElement("p");
   titleEl.textContent = title
   titleEl.classList.add("result-title")
   
   let paraEl = document.createElement("p");
   paraEl.textContent = link
   paraEl.classList.add("result-url")


   let descEl = document.createElement("p");
   descEl.textContent = description
   descEl.classList.add("link-description")
   
   
   


   contentDiv.appendChild(titleEl)
   contentDiv.appendChild(paraEl)
   contentDiv.appendChild(descEl)

   searchResultsContainer.appendChild(contentDiv)

}

function fetchingTheValue (value) {
    loaderEl.classList.add("d-block")
    searchResultsContainer.textContent = ""
    let url = "https://apis.ccbp.in/wiki-search?search=" + value
    
    let options = {
        method:"GET",
    }
    fetch(url,options)
    .then((res) => {
      return res.json()
    }).then((response) => {
        const {search_results} =response
        loaderEl.classList.remove("d-block")
        for (let obj of search_results){
            DisplayingTheResults(obj)
        }
       


    })
    .catch((error) => {
      console.log(error)
    })

}


function savingTheInputValue (event) {
    if(event.key === "Enter"){
     fetchingTheValue(event.target.value)      
    }

}

searchInputEl.addEventListener("keydown",savingTheInputValue)
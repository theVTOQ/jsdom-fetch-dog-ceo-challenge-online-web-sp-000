console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let breeds = [];

window.addEventListener('DOMContentLoaded', (event) => {
  //fetch(imgUrl).then(response => response.json()).then(json => addJSONImagesToDom(json));

  fetch(breedUrl).then(response => response.json()).then(json => addJSONBreedsToDom(json));
});

function addJSONImagesToDom(json){
  const imageListDiv = document.getElementById("dog-image-container");
  const imageList = document.createElement("ul");
  imageListDiv.appendChild(imageList);

  for (const element of json.message){
    const newImage = document.createElement("img");
    //imageList.innerHtml += `<li><img src="${json.message[i]}"></li>`;
    //newImage.src = json.message[i];
    newImage.src = element;
    imageList.appendChild(newImage);
  }
}

function addJSONBreedsToDom(json){
  breeds = Object.keys(json.message);
  //filteredBreeds = breeds;
  renderBreeds(breeds);

  const breedNameFilter = document.getElementById("breed-dropdown");
  //breedNameFilter.addEventListener("change", filterBreeds());
  breedNameFilter.addEventListener("change", function(){
    clearBreedList();
    const filterLetter = breedNameFilter.value;
    renderBreeds(filterBreeds(filterLetter));
  });
}

function renderBreeds(breedList) {
  clearBreedList();
  const breedUl = document.getElementById("dog-breeds");

  for(const breed of breedList){
    // for(breed of breedList){
    //   const li = document.createElement("li");
    //   li.innerHtml = breed;
    //   breedUl.appendChild(li);
    // }
    const li = document.createElement("li");
    li.innerText = breed;
    breedUl.appendChild(li);
  }

  addColorChangingEventListenersToBreeds();
}

function addColorChangingEventListenersToBreeds(){
  const breedLis = document.querySelectorAll("#dog-breeds li");

  breedLis.forEach(breedLi => {
    breedLi.addEventListener("click", function(){
      breedLi.style.color = "red";
    });
  });
}

function clearBreedList(){
  const breedUl = document.getElementById("dog-breeds");
  breedUl.textContent = "";
}

function filterBreeds(filterLetter) {
  const filterBreeds = [];

  for(const breed of breeds){
    const startingLetterOfBreed = breed[0]; //first character of string
    if (startingLetterOfBreed == filterLetter){
      filteredBreeds.push(breed);
    }else if (startingLetterOfBreed > filterLetter) {
      //breeds is an array of breed names in alphabetical order;
      //therefore, if the starting letter of an element in breeds is
      //alphabetically greater than startingLetter, no need to proceed
      return filteredBreeds;
    }
  }
  return filteredBreeds;
}

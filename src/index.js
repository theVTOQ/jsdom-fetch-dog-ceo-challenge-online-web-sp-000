console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

window.addEventListener('DOMContentLoaded', (event) => {
  fetch(imgUrl).then(response => response.json()).then(json => addJSONImagesToDom(json));
});

function addJSONImagesToDom(json){
  const imageListDiv = document.getElementById("dog-image-container");
  const imageList = document.createElement("ul");
  imageListDiv.appendChild(imageList);

  //console.log(json.message[0]);
  for (let i = 0; i < json.message.length; i++){
    const newImage = document.createElement("img");
    //imageList.innerHtml += `<li><img src="${json.message[i]}"></li>`;
    newImage.src = json.message[i];
    imageList.appendChild(newImage);
  }
}

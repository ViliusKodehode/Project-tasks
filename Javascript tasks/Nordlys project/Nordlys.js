const maincontainer = document.createElement("div")
maincontainer.className = "maincontainer";
document.body.appendChild(maincontainer);

const testingapi = document.createElement("div");
testingapi.className = "testingapi";
maincontainer.appendChild(testingapi);

const button = document.createElement("button");
button.className = "button";
button.textContent = "Click for test";
testingapi.appendChild(button);

fetch('https://api.auroras.live/v1/?type=locations')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  

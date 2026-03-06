let music = new Audio('sounds/secretLoop.mp3');
let sfx = new Audio('sounds/achievement.mp3');

function createElement(tag, content, style) {
  let element = document.createElement(tag);
  element.innerHTML = content;
  if (!(style == undefined)) {
    element.style = style;
  }
  document.body.appendChild(element);
}

async function readResponses() {
  let url = 'data/keymasterResponses.json';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let data = await fetch(url, options);
  let response = await data.json();
  response.forEach((element) => console.log(element));
}

window.onload = readResponses();

function achievement(name, cubeID) {
  sfx.play();
  // unfinished
}

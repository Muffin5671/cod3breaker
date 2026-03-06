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
  let x = await fetch('data/keymasterResponses.json');
  let y = await x.json();
  y.forEach((element) => console.log(element));
}

window.onload = readResponses();

function achievement(name, cubeID) {
  sfx.play();
  // unfinished
}

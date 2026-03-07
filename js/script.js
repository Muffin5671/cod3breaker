let music = new Audio('sounds/secretLoop.mp3');
let sfx = new Audio('sounds/achievement.mp3');

if (JSON.parse(localStorage.vosSettings).audio) {
  music.loop = true;
  music.play();
}

async function readResponses() {
  let url = 'data/keymasterResponses.json';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    let data = await fetch(url, options);
    let response = await data.json();
    response.forEach((element) => console.log(element));
  } catch (err) {
    document.getElementById('keymasterResponse').innerHTML = 'Something went wrong...';
  }
}

window.onload = readResponses();

function achievement(name, cubeID) {
  sfx.play();
  let element = document.createElement('div');
  element.id = 'achPopup'
  element.className = 'brownbox'
  let achName = document.createElement('p');
  achName.id = 'achName';
  achName.innerText = name;
  element.append(achName);
  document.body.append(element);
}

async function readResponses() {
  let x = await fetch('../data/keymasterResponses.json');
  let y = await x.json();
  y.forEach((element) => console.log(element));
}

onload = await readResponses();

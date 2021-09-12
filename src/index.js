import join from "lodash/join";
import "./style.css";
// import SynthWave from "./synthWave.png";
import Notes from "./data.csv";

function component() {
  const element = document.createElement("div");

  element.innerHTML = join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div
  /* const myImage = new Image();
  myImage.src = SynthWave;

  element.appendChild(myImage); */

  console.log(Notes);

  return element;
}

document.body.appendChild(component());

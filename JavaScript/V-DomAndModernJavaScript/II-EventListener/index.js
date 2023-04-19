// const clickEvent = (events) => {
//   console.log("Dont Click on the Screen Bastard");
//   console.log(events);
// };

//Add Event Listener

// document.addEventListener("click", clickEvent);

// Remove EventListener

// document.removeEventListener("click", clickEvent);

// Depatch

// Prevent Default

/*
let anchorTag = document.querySelector("#testLink");
anchorTag.addEventListener("click", () => {
  event.preventDefault();
  console.log("I wont perform  his default function");
});

let checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("click", () => {
  console.log("LOL You cant Click");
  event.preventDefault();
});
*/

// Avoid too many Events

//Raw Code & Implementation

/*
let myDiv = document.createElement("div");

for (let i = 0; i < 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is Para " + i;

  newElement.addEventListener("click", (event) => {
    console.log("I Have Clicked on ");
  });
  myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);
*/

// Optimized Code
/*
let myDiv = document.createElement("div");
let eventForPara = (event) => {
  console.log(event.target.textContent);
};
myDiv.addEventListener("click", eventForPara);

for (let i = 0; i < 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is Para " + i;

  myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);
*/

// Event Target

let element = document.querySelector("#wrapper");

element.addEventListener("click", function (event) {
  if (event.target.nodeName === "SPAN") {
    console.log(event.target.textContent);
  }
});

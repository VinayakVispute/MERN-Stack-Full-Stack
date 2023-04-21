//  A Standard Way to measure how long you code takes to run is 'performance.now()'

/*
const initalTime = performance.now();

//Adding 100 Paragraphs
for (let i = 0; i < 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is Para " + i;

  document.body.appendChild(newElement);
}

const finalTime = performance.now();

console.log("This code took " + (finalTime - initalTime) + "ms");
*/

/*
//Somewhat optimize Code

const optimizeInitalTime = performance.now();

let newDiv = document.createElement("div");

for (let i = 0; i < 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is Para " + i;

  newDiv.appendChild(newElement);
}
document.body.appendChild(newDiv);

const optimizeFinalTime = performance.now();
console.log(
  "This code took " + (optimizeFinalTime - optimizeInitalTime) + "ms"
);
*/

//Optimizing Somewhat using document fragment
const fragmentOptimizeInitalTime = performance.now();

let fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is Para " + i;

  fragment.appendChild(newElement);
}
document.body.appendChild(fragment);


const fragmentOptimizeFinalTime = performance.now();

console.log(
  "This code took " + (fragmentOptimizeFinalTime - fragmentOptimizeInitalTime) + "ms"
);
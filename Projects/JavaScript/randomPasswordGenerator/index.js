const dataLengthNumber = document.querySelector("[dataLengthNumber]");
const dataPasswordDisplay = document.querySelector("[dataPasswordDisplay]");
const dataLengthSlider = document.querySelector("[dataLengthSlider]");
const copyBtn = document.querySelector("[copyBtn]");
const copyMsg = document.querySelector("[copyMsg]");
const checkUpperCase = document.querySelector("#upperCase");
const checkLowerCase = document.querySelector("#lowerCase");
const checkNumbers = document.querySelector("#numbers");
const checkSymbols = document.querySelector("#symbols");
const dataIndicator = document.querySelector("[dataIndicator]");
const generateButton = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbolsList = "$%&*_+-=~`;:.,|/()[]{}<>!@";

let password = "";
let passwordLength = 10;
let checkCount = 1;
// Set Strength Indicator circle color
let dataIndicatorColor = "gray";

// <----------Functions-------->

//For Handling SLider
dataLengthNumber.innerText = passwordLength = dataLengthSlider.value;

function handleSlider() {
  dataLengthSlider.value = passwordLength;
  dataLengthNumber.innerText = passwordLength;
}

dataLengthSlider.addEventListener("input", (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

// For Data Strength Indicator

function setIndicator(color) {
  dataIndicator.style.backgroundColor = color;
  // Shadow Implementation is left......
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomNumber() {
  return getRandomInteger(0, 9);
}
function generateLowerCase() {
  return String.fromCharCode(
    getRandomInteger("a".charCodeAt(0), "z".charCodeAt(0))
  );
}

function generateUpperCase() {
  return String.fromCharCode(
    getRandomInteger("A".charCodeAt(0), "Z".charCodeAt(0))
  );
}

function generateSymbol() {
  return symbolsList[getRandomInteger(0, symbolsList.length)];
}

function calcStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSymbols = false;

  if (checkUpperCase.checked) {
    hasUpper = true;
  }
  if (checkLowerCase.checked) {
    hasLower = true;
  }
  if (checkSymbols.checked) {
    hasSymbols = true;
  }
  if (checkNumbers.checked) {
    hasNumber = true;
  }

  if (
    hasUpper &&
    hasLower &&
    (hasNumber || hasSymbols) &&
    passwordLength >= 8
  ) {
    setIndicator("#0f0");
  } else if (
    (hasLower || hasUpper) &&
    (hasNumber || hasSymbols) &&
    passwordLength >= 6
  ) {
    setIndicator("#ff0");
  } else {
    setIndicator("#f00");
  }
}

async function copyContent() {
  try {
    await navigator.clipboard.writeText(dataPasswordDisplay.value);
    copyMsg.innerText = "Copied";
    console.log("Copied");
  } catch (error) {
    copyMsg.innerText = "Error Copying";
    console.log(error);
  }
  copyMsg.classList.add("active");
  setTimeout(() => {
    copyMsg.classList.remove("active");
  }, 3000);
}

copyBtn.addEventListener("click", () => {
  if (dataPasswordDisplay.value) {
    copyContent();
  }
});

function handleCheckBoxChange() {
  checkCount = 0;
  allCheckBox.forEach((checkbox) => {
    if (checkbox.checked) {
      console.log("f", checkCount);
      checkCount++;
    }
  });

  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
}

allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckBoxChange);
});
let funArray = [];


generateButton.addEventListener("click", () => {
  // none of checkbox are selected
  if (checkCount <= 0) {
    return;
  }
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }

  // Let's Start Jounery to find new password

  // remove old password
  password = "";

  // Let fullfill requirement mentioned by checkbox

  // if(checkUpperCase.checked){
  //   pasword+=generateUpperCase();
  // }
  // if(checkLowerCase.checked){
  //   pasword+=generateLowerCase();
  // }
  // if(checkNumbers.checked){
  //   pasword+=getRandomNumber();
  // }
  // if(checkSymbols.checked){
  //   pasword+=generateSymbol();
  // }

  // let funArray = [];

  if (checkUpperCase.checked) {
    funArray.push(generateUpperCase());
  }
  if (checkLowerCase.checked) {
    funArray.push(generateLowerCase());
  }
  if (checkNumbers.checked) {
    funArray.push(getRandomNumber());
  }
  if (checkSymbols.checked) {
    funArray.push(generateSymbol());
  }

  // compulsory addition
let count =0;
  for(let i = 0;i<funArray.length;i++){

    password +=funArray[i];
    count++;
  }

  //remaining addition

  for(let i =0;i<passwordLength-funArray.length;i++){
    password+=funArray[getRandomInteger(0,funArray.length)]
    count++;

  }
  console.log(count);
  funArray.length=0;
  dataPasswordDisplay.placeholder = password;
});

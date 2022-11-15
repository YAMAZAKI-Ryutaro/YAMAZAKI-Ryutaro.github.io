// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World!!!";

// It's just mundane comment that is meanless.
// let myVariable = "Bob";
// myVariable = "Steve";

// let iceCream = "chocolate";
// if(iceCream === "chocolate"){
//   alert("Yay, I love Japanese curry & rice!!");
// }else{
//   alert("Awww, but chocolate is my favorite...")
// }

// let myVariableForHeadline = document.querySelector("h1");
// alert("Test of alert function");

// function multiply(num1, num2){
//   let result = num1 + num2;
//   return result;
// }

// multiply(4, 7);
// multiply(20, 20);
// multiply(0.5, 3);

// document.querySelector("img").addEventListener("click", function () {
//   alert("Hey!! Why did you do that suddenly?");
// });

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "/images/myTestImage.png"){
    myImage.setAttribute("src","/images/myTestImage2.png");
    alert("Hey!!");
  }else{
    myImage.setAttribute("src", "/images/myTestImage.png");
    alert("Hey!!");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
  const myName = prompt("Please enter your name.");
  if (!myName){
    setUserName();
  }else{
  localStorage.setItem("name", myName);
  myHeading.textContent = `The Sun is shining, ${myName}`;
  }
}

if(!localStorage.getItem("name")){
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.testContent = `The Sun is shining, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
}
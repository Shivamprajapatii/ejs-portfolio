// const dynamicText = document.querySelector("h3 span");

// const words = ["Full Stack Web Devloper","Coffe Lover","System Designer","Vloger"];
// let wordIndex = 0;
// let charIndex = 0;
// let isDeleting = false;


// const typeEffect = () => {
//   const currentWord = words[wordIndex];
//   const currentChar = currentWord.substring(0,charIndex);
//   dynamicText.textContent = currentChar;

//   if(!isDeleting  && charIndex < currentWord.length) {
//     charIndex ++;
//     setTimeout(typeEffect,60);
//   } else if(isDeleting  && charIndex > 0) {
//     charIndex --;
//     setTimeout(typeEffect,100);
//   } else {
//     isDeleting = !isDeleting;
//     wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex; 
//     setTimeout(typeEffect,300);
//   }
// } 

// typeEffect();



const dynamicText = document.querySelector("h6 span");

const wordss = ["#GitHub","#linkdIn ","#Instagram","#Facebook","#Twitter"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;


const typeEffect = () => {
  const currentWord = wordss[wordIndex];
  const currentChar = currentWord.substring(0,charIndex);
  dynamicText.textContent = currentChar;

  if(!isDeleting  && charIndex < currentWord.length) {
    charIndex ++;
    setTimeout(typeEffect,60);
  } else if(isDeleting  && charIndex > 0) {
    charIndex --;
    setTimeout(typeEffect,100);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % wordss.length : wordIndex; 
    setTimeout(typeEffect,300);
  }
} 

typeEffect();
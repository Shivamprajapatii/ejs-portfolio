const dynamicText1 = document.querySelector("h3 span");

const words1 = ["Full Stack Web Devloper","Coffe Lover","System Designer","Vloger"];
let wordIndex1 = 0;
let charIndex1 = 0;
let isDeleting1 = false;


const typeEffec1 = () => {
  const currentWor1 = words1[wordIndex1];
  const currentChar1 = currentWor1.substring(0,charIndex1);
  dynamicText1.textContent = currentChar1;

  if(!isDeleting1  && charIndex1 < currentWor1.length) {
    charIndex1 ++;
    setTimeout(typeEffec1,60);
  } else if(isDeleting1  && charIndex1 > 0) {
    charIndex1 --;
    setTimeout(typeEffec1,100);
  } else {
    isDeleting1 = !isDeleting1;
    wordIndex1 = !isDeleting1 ? (wordIndex1 + 1) % words1.length : wordIndex1; 
    setTimeout(typeEffec1,400);
  }
} 

typeEffec1();


// Foooter



const dynamicText2 = document.querySelector("h6 span");

const words2 = ["#GitHub","#linkdIn ","#Instagram","#Facebook","#Twitter"];
let wordIndex2 = 0;
let charIndex2 = 0;
let isDeleting2 = false;


const typeEffec2 = () => {
  const currentWord2 = words2[wordIndex2];
  const currentChar2 = currentWord2.substring(0,charIndex2);
  dynamicText2.textContent = currentChar2;

  if(!isDeleting2  && charIndex2 < currentWord2.length) {
    charIndex2 ++;
    setTimeout(typeEffec2,60);
  } else if(isDeleting2  && charIndex2 > 0) {
    charIndex2 --;
    setTimeout(typeEffec2,300);
  } else {
    isDeleting2 = !isDeleting2;
    wordIndex2 = !isDeleting2 ? (wordIndex2 + 1) % words2.length : wordIndex2; 
    setTimeout(typeEffec2,700);
  }
} 

typeEffec2();



function randomImageBroker(ElemName, imgArray) {
  const imgELM = document.getElementById(ElemName);
  const randomIndex = mathRandom(imgArray);
  imgELM.src = imgArray[randomIndex];
}

function randomTextBroker(ElemName, textArray) {
  const textElm = document.getElementById(ElemName);
  const randomIndex = mathRandom(textArray);
  textElm.innerHTML = textArray[randomIndex]
}

function mathRandom(srcArray) {
  return Math.floor(Math.random()*srcArray.length);
}

base_path = "/images/weebos_avif/";
//file_extension = ".avif"

// Create a new array to store the modified strings
imgArray = imgArray.map(img_path => base_path + img_path);

//console.log(imgArray)

// Set image display
var img = document.getElementById("random-img");
img.style.display = "block";

// text randomized
//document.getElementById("p1").innerHTML = "New tererxt!";

document.onload = randomImageBroker('random-img', imgArray);
randomTextBroker('random-text', text_array)
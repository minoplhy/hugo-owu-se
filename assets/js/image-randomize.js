function randomImageBroker(ElemName, imgArray) {
  const imgEl = document.getElementById(ElemName);
  randomImage(imgEl, imgArray)

}

function randomImage(imgELM, srcArray) {
  const randomIndex = Math.floor(Math.random()*srcArray.length);
  imgELM.src = srcArray[randomIndex];
}

base_path = "/images/weebos_avif/";
//file_extension = ".avif"

// Create a new array to store the modified strings
imgArray = imgArray.map(img_path => base_path + img_path);

//console.log(imgArray)
document.onload = randomImageBroker('homepage-rand-img', imgArray);
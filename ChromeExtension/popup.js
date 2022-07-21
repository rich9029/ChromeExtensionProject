// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   //we use tabs.query to access different - gives us info on what the user is currently doing within chrome - can access properties...check documentation
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     //change functionality here
//     function: setPageBackgroundColor,
//   });
// });

// The body of this function will be executed as a content script inside the
// current page
// function setPageBackgroundColor() {
//   //storage get sync.get to get something from storage after we storage.sync.set

//   //have function search through - document.getelementbyID('img')
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }


changeColor.addEventListener("click", async () => {
  //we use tabs.query to access different - gives us info on what the user is currently doing within chrome - can access properties...check documentation
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    //change functionality here
    function: setKittyCatImages
  });
});


//Find all images on a page and replace with kitty cats
function setKittyCatImages() {
  let elements = document.querySelectorAll("img")

  //elements is an array -> we will go iterate through the elements and access the individual keys
  for (let i = 0; i< elements.length; i++){
    elements[i].src = "https://http.cat/415"
  }

  //gets rid of the aside bar in yahoo
  let asider = document.getElementById("Aside");
  let viewerAside = document.getElementById("viewer-aside");
  let ads = document.querySelectorAll('alt');
  let iFrame = document.querySelectorAll('iframe');

  console.log(iFrame);
  
  for (let i = 0; i< iFrame.length; i++){
    iFrame[i].remove();
  }

  if (asider) return asider.textContent = '';
  if (ads) return ads.textContent = '';
  if (viewerAside) return viewerAside.textContent = '';


  return elements;
  //kitty file path ./images/415.jpeg./images/415.jpeg
}



  // console.log(nativeAds);
  // nativeAds.textContent = '';
  // billboard.textContent= '';
  // return nativeAds;}

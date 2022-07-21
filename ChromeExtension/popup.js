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
  console.log(elements);
  console.log(elements[0].src);
  //elements is an array -> we will go iterate through the elements and access the individual keys
  for (let i = 0; i< elements.length; i++){
    elements[i].src = "https://http.cat/415"
  }

  //gets rid of the aside bar in yahoo
  let aside = document.getElementById("Aside")
  aside.textContent = '';


  return elements;
  //kitty file path ./images/415.jpeg./images/415.jpeg
}


function sleepyKitty(){
  let aside = document.querySelectorAll("Aside")
      aside.textContent = '';
 }


  // console.log(nativeAds);
  // nativeAds.textContent = '';
  // billboard.textContent= '';
  // return nativeAds;}

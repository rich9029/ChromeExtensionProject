
let  = '#0F4366';

chrome.runtime.onInstalled.addListener(()=> {
    //we add the color into storage API 
    //https://developer.chrome.com/docs/extensions/reference/storage/
    chrome.storage.sync.set({color});
    console.log('Default background color set to %cgreen', `color: ${color}`);
});
    
const studyFilter = [
    "*://*.doubleclick.net/*",
    "*//*.partner.googleadservices.com/*",
    "*//*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.akfbcd.net/*",
    "*://*googleadservices.com/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserver.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",    
    "*://*.gemini.*",
    "*s.yimg.com/*",
    "*.akamaized.*",
    "*://*.w3.org/*",
    "//platform.bidgear.com/*",
    "*.github.com",
    "*.mozilla.org/*"




]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {return {cancel:true}},
    {urls: studyFilter},
    ["blocking"]
)
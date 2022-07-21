
let color = '#0F4366';

chrome.runtime.onInstalled.addListener(()=> {
    //we add the color into storage API 
    //https://developer.chrome.com/docs/extensions/reference/storage/
    chrome.storage.sync.set({color});
    console.log('Default background color set to %cgreen', `color: ${color}`);
});
    

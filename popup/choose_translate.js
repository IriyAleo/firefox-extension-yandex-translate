
browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
    let tab = tabs[0]; // Safe to assume there will only be one result
    console.log(tab.url);
    tab.url = "https://translate.yandex.com/translate?js=y&url="+tab.url;
    console.log(tab.url);
    browser.tabs.update({url: tab.url});
}, console.error);

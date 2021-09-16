browser.storage.onChanged.addListener(changes => {
  browser.tabs.query({ active: true, currentWindow: true})
    .then(activeTabs => {
      browser.tabs.reload(activeTabs[0].id);
    })
});

browser.storage.local.get('beeneedeenee.cumberbumber.settings')
  .then(item => {
    if (!item['beeneedeenee.cumberbumber.settings']) {
      browser.storage.local.set({
          'beeneedeenee.cumberbumber.settings': {
            active: true
          }
      }).then(() => console.log("OK"));
    }
  });
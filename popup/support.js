function updateSettings(itemName) {
    browser.storage.local.get('beeneedeenee.cumberbumber.settings')
        .then(item => {
            var update = item['beeneedeenee.cumberbumber.settings'];
            update[itemName] = !update[itemName];
            browser.storage.local.set({'beeneedeenee.cumberbumber.settings': update})
                .then(() => console.log("OK"));
        });
}

document.getElementById('active').addEventListener('click', function () {
    updateSettings('active');
});

browser.storage.local.get('beeneedeenee.cumberbumber.settings')
.then(item => {
    var settings = item['beeneedeenee.cumberbumber.settings'];
    document.getElementById('active').checked = settings.active;
});
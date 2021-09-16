browser.storage.local.get('beeneedeenee.cumberbumber.settings')
    .then(item => {
        if (item['beeneedeenee.cumberbumber.settings'].active) {
            for (elemType of ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'title']){
                for (elem of document.getElementsByTagName(elemType)) {
                    elem.textContent = elem.textContent.replace(/Benedict Cumberbatch/g,"Beeneedeenee Cumberbumber");
                    elem.textContent = elem.textContent.replace(/benedict cumberbatch/g,"beeneedeenee cumberbumber");
                }    
            }
        }
    })
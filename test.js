const bbtohtml = require('./bbcode');

(async function name() {
    var bbcode = `Bonjour tout le monde,\r\n\r\nBienvenue dans le patch 8.7 de League of Legends. Le Patch a été fait avec les dernières données retrouvé sur le futur patch télécharger sur l\'API Riot.\r\n\r\nCe patch est donc à titre indicatif mais la plupart des modifications faites sont ici.`;
    var html = await bbtohtml(bbcode);
    console.log(html);
})()
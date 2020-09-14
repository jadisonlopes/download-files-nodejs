const { requestAPI, saveJsonFromFiles } = require("./image.js");
const { execSaveFiles } = require("./download.js");

async function init() {
  const images = await requestAPI();

  saveJsonFromFiles(images);

  execSaveFiles();
}

init();

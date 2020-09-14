const { base64ToBuffer } = require("./buffer.js");
const { createFile } = require("./file.js");

function execSaveFiles() {
  const products = require("./assets/json/products.json");

  for (const key in products) {
    if (products.hasOwnProperty(key)) {
      const buffer = base64ToBuffer(products[key].imagem);
      const path = "assets/images/";
      const name = `${key} - ${products[key].nome} (${products[key].sr_recno})`;

      createFile(buffer, path, name, "png");
    }
  }
}

module.exports = { execSaveFiles };

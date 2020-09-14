const api = require("./api.js");
const { createFile } = require("./file.js");

async function requestAPI() {
  let ultCodigo = "000000";
  const images = [];

  do {
    const { data } = await api.get("/product", {
      params: {
        codigo: ultCodigo,
      },
    });

    images.push(...data);

    ultCodigo = lastItemArray(data);
  } while (ultCodigo);
  return images;
}

function lastItemArray(arr) {
  return arr.length > 0 ? arr.slice(-1)[0].codigo : false;
}

function saveJsonFromFiles(arr) {
  let [products, errors] = [{}, {}];

  for (const product of arr) {
    const { codigo, nome, Images } = product;

    Images.forEach((element) => {
      const { imagem, sr_recno } = element;
      const obj = { nome, imagem, sr_recno };
      try {
        products[codigo] = obj;
      } catch (error) {
        errors[codigo] = obj;
      }
    });
  }
  createFile(JSON.stringify(products), "assets/json/", "products", "json");
  createFile(JSON.stringify(errors), "error/", "errors", "json");
}

module.exports = {
  requestAPI,
  saveJsonFromFiles,
};

const fs = require("fs");
const { removeCaracterEspecial } = require("./util/strings.js");

function createFile(file, path, name, typeFile) {
  if (file)
    fs.writeFileSync(
      `${path}${removeCaracterEspecial(name)}.${typeFile}`,
      file
    );
}

module.exports = {
  createFile,
};

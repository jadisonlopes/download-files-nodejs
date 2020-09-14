function base64ToBuffer(base64) {
  const buff = new Buffer.from(base64, "base64");

  return buff;
}

module.exports = {
  base64ToBuffer,
};

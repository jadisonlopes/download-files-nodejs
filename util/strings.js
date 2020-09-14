function removeCaracterEspecial(str) {
  return str.replace(/[?*|\:"<>/]/gi, "");
}

module.exports = {
  removeCaracterEspecial,
};

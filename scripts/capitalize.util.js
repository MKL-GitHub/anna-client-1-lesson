/**
 *
 * @param {string} str
 */
const capitalize = (str) => {
  const firstLetter = str[0].toUpperCase();
  return firstLetter + str.slice(1);
};

module.exports = capitalize;

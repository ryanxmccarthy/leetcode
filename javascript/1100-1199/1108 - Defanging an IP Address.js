/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  const arr = address.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ".") {
      arr[i] = "[.]";
    }
  }
  return arr.join("");
};

/***
 * Truncate
 * @param {string} text - text to truncate
 * @param {number} length - length to truncate text (defaults to 20)
 */
export const truncate = (text, length = 20) => {
  if (text.length <= length) return text;

  return `${text.substr(0, length)}...`;
};

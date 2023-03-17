/**
 * Delivers currying method which accepts javascript variable type to validate it
 *
 * @param {String} type
 * @returns currying method
 */
const isType = (type) => (value) => Object.prototype.toString.call(value) === `[object ${type}]`;

/**
 * Determine if given value is absolute object or not
 *
 * @param {Any} value
 * @returns {Boolean}
 */
export const isObject = isType('Object');

/**
 * Determine if given value is absolute string or not
 *
 * @param {Any} value
 * @returns {Boolean}
 */
export const isString = isType('String');

/**
 * Determine if given value is absolute DOM Node or not
 *
 * @param {Any} value
 * @returns {Boolean}
 */
export const isNode = (value) => value instanceof Node;

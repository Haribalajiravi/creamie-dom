import { isNode, isObject, isString } from './internal';

/**
 * Sets given attributes to the element
 *
 * @param {Node} element
 * @param {Object} attributes
 */
export const setAttributes = function (element, attributes) {
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
};

/**
 * Creates DOM nodes and its attributes
 *
 * @param {String} tagName
 * @returns
 */
export const createElement = function (tagName) {
  return function (...args) {
    const element = document.createElement(tagName);

    args?.forEach((arg) => {
      if (isObject(arg)) {
        setAttributes(element, arg);
      } else if (isString(arg) || isNode(arg)) {
        element.append(arg);
      }
    });

    return element;
  };
};

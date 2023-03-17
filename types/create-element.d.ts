import { HtmlTag } from './html-tags';

/**
 * HTML attribute value
 */
export type AttributeValue = string;

/**
 * HTML attribute key
 */
export type AttributeKey = string;

/**
 * HTML attributes
 */
export type Attributes = { [key: AttributeKey]: AttributeValue };

/**
 * Creates final DOM element
 */
export type CreateNodeMethod = (...arg: Attributes | string | Node) => Node;

/**
 * Creates DOM nodes and its attributes
 *
 * @param {String} tagName
 * @returns
 */
export declare type createElement = (tagName: HtmlTag) => CreateNodeMethod;

/**
 * Sets given attributes to the element
 *
 * @param {Node} element
 * @param {Object} attributes
 */
export declare type setAttributes = (element: Node, attributes: Attributes) => void;

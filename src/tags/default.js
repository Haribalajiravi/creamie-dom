import { createElement } from './../create-element';
import { htmlTags } from './../html-tags';

/**
 * Register all the possible HTML tags to the browser window
 */
htmlTags.forEach((tag) => {
  window[tag] = createElement(tag);
});

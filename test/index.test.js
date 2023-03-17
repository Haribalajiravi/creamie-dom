import './init-dom';

import { test } from '@jest/globals';

import { createElement } from '../src';

test('createElement basic tag', () => {
  const div = createElement('div');
  const h1 = createElement('h1');
  const p = createElement('p');
  const span = createElement('span');
  const el = div(h1('Heading'), p('This is paragraph'), span('some-span-text'));

  expect(el.querySelector('h1').textContent).toEqual('Heading');
  expect(el.querySelector('p').textContent).toEqual('This is paragraph');
  expect(el.querySelector('span').textContent).toEqual('some-span-text');
});

test('createElement with properties', () => {
  const div = createElement('div');
  const el = div(
    {
      class: 'primary-btn',
      customAttr: 'value'
    },
    'Some text'
  );

  expect(el.textContent).toEqual('Some text');
  expect(el.getAttribute('customAttr')).toEqual('value');
});

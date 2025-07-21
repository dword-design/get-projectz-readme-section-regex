import { expect, test } from '@playwright/test';
import endent from 'endent';

import self from '.';

test('closed', () => {
  const content = endent`
    foo
    <!-- BADGES -->
    bar
  `;

  expect(self('BADGES').test(content)).toBeTruthy();
  expect(content.match(self('BADGES'))[1]).toBeUndefined();
});

test('indented closed', () => {
  const content = endent`
    foo
      <!-- BADGES -->
  `;

  expect(self('BADGES').test(content)).toBeFalsy();
});

test('indented open', () => {
  const content = endent`
    foo
      <!-- BADGES/ -->
      bar
      <!-- /BADGES -->
  `;

  expect(self('BADGES').test(content)).toBeFalsy();
});

test('multiline', () => {
  const content = endent`
    <!-- BADGES/ -->
    foo
    bar
    <!-- /BADGES -->
  `;

  expect(content.match(self('BADGES'))[1]).toEqual(endent`
    foo
    bar
  `);
});

test('open', () => {
  const content = endent`
    foo
    <!-- BADGES/ -->
    bar
    <!-- /BADGES -->
  `;

  expect(content.match(self('BADGES'))[1]).toEqual('bar');
});

test('open and closed', () => {
  const content = endent`
    <!-- BADGES/ -->
    bar
    <!-- /BADGES -->

    <!-- BADGES ->
  `;

  expect(content.match(self('BADGES'))[1]).toEqual('bar');
});

test('unknown', () => {
  expect(
    self('BADGES').test(endent`
      foo
      <!-- FOO -->
      bar
    `),
  ).toBeFalsy();

  expect(
    self('BADGES').test(endent`
      foo
      <!-- FOO/ -->
      bar
      <!-- /FOO -->
    `),
  ).toBeFalsy();
});

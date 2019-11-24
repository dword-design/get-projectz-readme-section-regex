import getProjectzReadmeSectionRegex from 'get-projectz-readme-section-regex'
import expect from 'expect'
import { endent } from '@functions'

export default () => {
  expect(getProjectzReadmeSectionRegex('BADGES').test(endent`
    foo
    <!-- BADGES -->
    bar
  ` + '\n')).toBeTruthy()
  expect(getProjectzReadmeSectionRegex('BADGES').test(endent`
    foo
    <!-- BADGES/ -->
    bar
    <!-- /BADGES -->
  ` + '\n')).toBeTruthy()
}

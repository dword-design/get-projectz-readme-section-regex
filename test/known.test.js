import getProjectzReadmeSectionRegex from 'get-projectz-readme-section-regex'
import { endent } from '@dword-design/functions'

export default () => {
  expect(getProjectzReadmeSectionRegex('BADGES').test(endent`
    foo
    <!-- BADGES -->
    bar
  `)).toBeTruthy()
  expect(getProjectzReadmeSectionRegex('BADGES').test(endent`
    foo
    <!-- BADGES/ -->
    bar
    <!-- /BADGES -->
  `)).toBeTruthy()
}

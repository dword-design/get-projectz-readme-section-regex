import getProjectzReadmeSectionRegex from 'get-projectz-readme-section-regex'
import { endent } from '@dword-design/functions'

export default () => {
  expect(getProjectzReadmeSectionRegex('BADGES').test(endent`
    foo
    <!-- FOO -->
    bar
  `)).toBeFalsy()
  expect(getProjectzReadmeSectionRegex('BADGES').test(endent`
    foo
    <!-- FOO/ -->
    bar
    <!-- /FOO -->
  `)).toBeFalsy()
}

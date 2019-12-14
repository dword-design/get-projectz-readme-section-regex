import getProjectzReadmeSectionRegex from 'get-projectz-readme-section-regex'
import expect from 'expect'
import { endent } from '@dword-design/functions'

export default () => {
  expect(getProjectzReadmeSectionRegex('BADGES').test(endent`
    foo
    <!-- FOO -->
    bar
  ` + '\n')).toBeFalsy()
  expect(getProjectzReadmeSectionRegex('BADGES').test(endent`
    foo
    <!-- FOO/ -->
    bar
    <!-- /FOO -->
  ` + '\n')).toBeFalsy()
}

import getProjectzReadmeSectionRegex from 'get-projectz-readme-section-regex'
import { endent } from '@dword-design/functions'

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

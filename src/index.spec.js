import getProjectzReadmeSectionRegex from '.'
import { endent } from '@dword-design/functions'

export default {
  known: () => {
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
  },
  unknown: () => {
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
  },
}

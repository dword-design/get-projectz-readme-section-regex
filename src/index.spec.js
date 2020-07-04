import { endent } from '@dword-design/functions'

import getProjectzReadmeSectionRegex from '.'

export default {
  closed: () => {
    const content = endent`
      foo
      <!-- BADGES -->
      bar
    `
    expect(getProjectzReadmeSectionRegex('BADGES').test(content)).toBeTruthy()
    expect(
      content.match(getProjectzReadmeSectionRegex('BADGES'))[1]
    ).toBeUndefined()
  },
  'indented closed': () => {
    const content = endent`
      foo
        <!-- BADGES -->
    `
    expect(getProjectzReadmeSectionRegex('BADGES').test(content)).toBeFalsy()
  },
  'indented open': () => {
    const content = endent`
      foo
        <!-- BADGES/ -->
        bar
        <!-- /BADGES -->
    `
    expect(getProjectzReadmeSectionRegex('BADGES').test(content)).toBeFalsy()
  },
  multiline: () => {
    const content = endent`
      <!-- BADGES/ -->
      foo
      bar
      <!-- /BADGES -->
    `
    expect(content.match(getProjectzReadmeSectionRegex('BADGES'))[1])
      .toEqual(endent`
      foo
      bar
    `)
  },
  open: () => {
    const content = endent`
      foo
      <!-- BADGES/ -->
      bar
      <!-- /BADGES -->
    `
    expect(content.match(getProjectzReadmeSectionRegex('BADGES'))[1]).toEqual(
      'bar'
    )
  },
  'open and closed': () => {
    const content = endent`
      <!-- BADGES/ -->
      bar
      <!-- /BADGES -->

      <!-- BADGES ->
    `
    expect(content.match(getProjectzReadmeSectionRegex('BADGES'))[1]).toEqual(
      'bar'
    )
  },
  unknown: () => {
    expect(
      getProjectzReadmeSectionRegex('BADGES').test(endent`
      foo
      <!-- FOO -->
      bar
    `)
    ).toBeFalsy()
    expect(
      getProjectzReadmeSectionRegex('BADGES').test(endent`
      foo
      <!-- FOO/ -->
      bar
      <!-- /FOO -->
    `)
    ).toBeFalsy()
  },
}

import { join } from '@dword-design/functions'

export default regexName =>
  new RegExp(
    [
      `^<!--\\s*${regexName}\\s*-->`,
      '|',
      `^<!--\\s*${regexName}/\\s*-->\\s*(.*?)\\s*^<!--\\s*/${regexName}\\s*-->`,
    ] |> join(''),
    'mis'
  )

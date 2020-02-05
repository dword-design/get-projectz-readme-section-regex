import { join } from '@dword-design/functions'

export default regexName => new RegExp(
  [
    '^(',
    `<!--\\s*${regexName}\\s*-->`,
    '|',
    `<!--\\s*${regexName}/\\s*-->`,
    '[\\s\\S]*?',
    `<!--\\s*/${regexName}\\s*-->`,
    ')\\s+',
  ] |> join(''),
  'gim',
)

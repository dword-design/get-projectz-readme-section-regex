export default (regexName: string) =>
  new RegExp(
    [
      `^<!--\\s*${regexName}\\s*-->`,
      '|',
      `^<!--\\s*${regexName}/\\s*-->\\s*((.|\\n)*?)\\s*^<!--\\s*/${regexName}\\s*-->`,
    ].join(''),
    'mi',
  );

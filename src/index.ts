export default (regexName: string) =>
  new RegExp(
    [
      String.raw`^<!--\s*${regexName}\s*-->`,
      '|',
      String.raw`^<!--\s*${regexName}/\s*-->\s*((.|\n)*?)\s*^<!--\s*/${regexName}\s*-->`,
    ].join(''),
    'mi',
  );

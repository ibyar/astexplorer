import defaultParserInterface from '../utils/defaultParserInterface';
import pkg from '@ibyar/elements/package.json';

const ID = '@ibyar/elements';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: pkg.homepage,
  typeProps: new Set(['name']),

  loadParser(callback) {
    import('@ibyar/elements').then(module => callback(module.htmlParser));
  },

  parse(parser, code, options) {
    return parser.parse(code);
  },

  getDefaultOptions() {
    return {
      preserveWhitespaces: false,
    };
  },
};
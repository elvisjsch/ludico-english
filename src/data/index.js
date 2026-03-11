export { regularVerbs, categories } from './regularVerbs.js';
export { irregularVerbs } from './irregularVerbs.js';
export { connectives } from './connectives.js';
export { regularExamples, irregularExamples, getExamples } from './examples.js';

export const getVerbsByCategory = (category) => {
  switch (category) {
    case 'reg':
      return regularVerbs;
    case 'irreg':
      return irregularVerbs;
    case 'ambos':
      return [...regularVerbs, ...irregularVerbs];
    case 'conect':
      return connectives;
    default:
      return regularVerbs;
  }
};

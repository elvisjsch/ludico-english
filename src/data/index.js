import { regularVerbs} from './regularVerbs.js';
import { irregularVerbs } from './irregularVerbs.js';
import { connectives } from './connectives.js';
import { adjectives } from './adjectives.js';
import { regularExamples, irregularExamples, getExamples } from './examples.js';

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
    case 'adj':
      return adjectives;
    default:
      return regularVerbs;
  }
};

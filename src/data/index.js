import { regularVerbs} from './regularVerbs.js';
import { irregularVerbs } from './irregularVerbs.js';
import { connectives } from './connectives.js';
import { adjectives } from './adjectives.js';
import { family } from './family.js';
import { places } from './places.js';
import { food } from './food.js';
import { jobs } from './jobs.js';
import { clothes } from './clothes.js';
import { regularExamples, irregularExamples, getExamples, familyExamples, placesExamples, foodExamples, jobsExamples, clothesExamples } from './examples.js';

export { family, places, food, jobs, clothes };
export { familyExamples, placesExamples, foodExamples, jobsExamples, clothesExamples };

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

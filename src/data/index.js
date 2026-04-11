import { regularVerbs} from './regularVerbs.js';
import { irregularVerbs } from './irregularVerbs.js';
import { connectives } from './connectives.js';
import { adjectives } from './adjectives.js';
import { family } from './family.js';
import { places } from './places.js';
import { food } from './food.js';
import { jobs } from './jobs.js';
import { clothes } from './clothes.js';
import { vegetables } from './vegetables.js';
import { regularExamples, irregularExamples, getExamples, familyExamples, placesExamples, foodExamples, jobsExamples, clothesExamples, foodFruitsExamples, foodVegetablesExamples, foodMeatsExamples, foodPoultryExamples, foodSeafoodExamples, foodFastFoodExamples } from './examples.js';
import { adverbsExamples } from './adverbs.js';
import { commonWordsExamples } from './commonWords.js';

export { family, places, food, jobs, clothes, vegetables };
export { familyExamples, placesExamples, foodExamples, jobsExamples, clothesExamples, foodFruitsExamples, foodVegetablesExamples, foodMeatsExamples, foodPoultryExamples, foodSeafoodExamples, foodFastFoodExamples };
export { adverbsExamples, commonWordsExamples };

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

export const getWordsByCategory = (category) => {
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
    case 'family':
      return familyExamples;
    case 'lugares':
      return placesExamples;
    case 'comida':
    case 'frutas':
      return foodFruitsExamples;
    case 'vegetales':
      return foodVegetablesExamples;
    case 'carnes':
      return foodMeatsExamples;
    case 'aves':
      return foodPoultryExamples;
    case 'pescados':
      return foodSeafoodExamples;
    case 'rapida':
      return foodFastFoodExamples;
    case 'ocupaciones':
      return jobsExamples;
    case 'ropa':
      return clothesExamples;
    case 'adverbs':
      return adverbsExamples;
    case 'commonWords':
      return commonWordsExamples;
    default:
      return regularVerbs;
  }
};
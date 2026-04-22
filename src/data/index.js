import { regularVerbs} from './regularVerbs.js';
import { irregularVerbs } from './irregularVerbs.js';
import { connectives } from './connectives.js';
import { adjectivesData } from './adjectives.js';
import { familyData } from './family.js';
import { placesData } from './places.js';
import { foodData } from './food.js';
import { jobsData } from './jobs.js';
import { clothesData } from './clothes.js';
import { vegetablesData } from './vegetables.js';
import { poultryData } from './poultry.js';
import { seafoodData } from './seafood.js';
import { regularExamples, irregularExamples, getExamples, foodFruitsExamples, foodMeatsExamples, foodFastFoodExamples } from './examples.js';
import { adverbsData } from './adverbs.js';
import { commonWordsData } from './commonWords.js';

export { familyData, placesData, foodData, jobsData, clothesData, vegetablesData, poultryData, seafoodData };
export { adverbsData, commonWordsData };

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
      return adjectivesData;
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
      return adjectivesData;
    case 'family':
      return familyData;
    case 'lugares':
      return placesData;
    case 'comida':
    case 'frutas':
      return foodFruitsExamples;
    case 'vegetales':
      return vegetablesData;
    case 'carnes':
      return foodMeatsExamples;
    case 'aves':
      return poultryData;
    case 'pescados':
      return seafoodData;
    case 'rapida':
      return foodFastFoodExamples;
    case 'ocupaciones':
      return jobsData;
    case 'ropa':
      return clothesData;
    case 'adverbs':
      return adverbsData;
    case 'commonWords':
      return commonWordsData;
    default:
      return regularVerbs;
  }
};
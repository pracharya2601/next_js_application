import {createContext} from 'react';
import {languageList} from 'utils/language';

export const languageContext = createContext({
  userLanguage: 'en',
  dictionary: languageList.en,
});
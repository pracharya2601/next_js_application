import{ useContext, useEffect } from 'react';
import { languageOptions } from 'utils/language';
import {languageContext} from 'context/language/languagecontext';
import {Txt} from "context/language";
import {LanguageBtnContainer,StyledSelect, StyledLabel} from './index.styles';

const LanguageChangeBtn = () => {
  
  const { userLanguage, languageChange, dictionary } = useContext(languageContext);
  const handleLanguageChange = e => languageChange(e.target.value);
    useEffect(() => {
      let defaultLanguage = window.localStorage.getItem('user-lang');
      if (!defaultLanguage) {
        defaultLanguage = window.navigator.language.substring(0, 2);
      }
      languageChange(defaultLanguage);
    }, [languageChange]);

  return (
    <LanguageBtnContainer>
    <StyledLabel>Select Language</StyledLabel>
    <StyledSelect
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      {Object.entries(languageOptions).map(([id, name])=> (
        <option key={id} value={id}>{name}</option>
      ))}
    </StyledSelect>
    {/* <p><Txt txt="name" /></p>
      <p>{dictionary.navbar.about}</p> */}
    </LanguageBtnContainer>
  )

}

export default LanguageChangeBtn;
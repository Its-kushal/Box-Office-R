import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CoustomRadio';

const SearchForm = ({ onSearch }) => {
   const [searchStr, setSearchStr] = useSearchStr();
   const [searchOption, setSearchOption] = useState('shows');

   const onSearchInputChange = ev => {
      setSearchStr(ev.target.value);
   };

   const onRadioChange = ev => {
      setSearchOption(ev.target.value);
   };

   const onSubmit = ev => {
      ev.preventDefault();

      const options = {
         q: searchStr,
         searchOption,
      };

      onSearch(options);
   };
   return (
      <form onSubmit={onSubmit}>
         <input type="text" onChange={onSearchInputChange} value={searchStr} />

         <CustomRadio
            label="Shows"
            name="search-options"
            value="shows"
            checked={searchOption === 'shows'}
            onChange={onRadioChange}
         />

         <CustomRadio
            label="Actors"
            name="search-options"
            value="actors"
            checked={searchOption === 'actors'}
            onChange={onRadioChange}
         />

         
         <button type="submit">Search</button>
      </form>
   );
};

export default SearchForm;

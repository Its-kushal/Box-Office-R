import { useState } from 'react';

const SearchForm = ({onSearch}) => {
   const [searchStr, setSearchStr] = useState('');
   const [searchOption, setSearchOption] = useState('movies');

   const onSearchInputChange = ev => {
      setSearchStr(ev.target.value);
   };

   const onRadioChange = ev => {
      setSearchOption(ev.target.value);
   };

   const onSubmit = (ev) => {
    ev.preventDefault();

    const options = {
        q: searchStr,
        searchOption,
    }

    onSearch(options);
   }
   return (
      <form onSubmit={onSubmit}>
         <input type="text" onChange={onSearchInputChange} value={searchStr} />

         <label>
            Movies
            <input
               type="radio"
               value="movies"
               name="search-options"
               checked={searchOption === 'movies'}
               onChange={onRadioChange}
            />
         </label>
         <label>
            Actors
            <input
               type="radio"
               value="actors"
               name="search-options"
               checked={searchOption === 'actors'}
               onChange={onRadioChange}
            />
         </label>
         <button type="submit">Search</button>
      </form>
   );
};

export default SearchForm;

// import { Link } from "react-router-dom";
import { useState } from 'react';

const Home = () => {
   const [searchStr, setSearchStr] = useState('');

   // console.log(searchStr);

   const onSearchInputChange = ev => {
      setSearchStr(ev.target.value);
   };

   const onSearch = async (ev) => {
      // console.log(ev);
      // https://api.tvmaze.com/search/shows?q=girls
      ev.preventDefault();

      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`);
      const body = await response.json();

      console.log(body);
   }

   return (
      <div>
         <form onSubmit={onSearch}>
            <input type="text" onChange={onSearchInputChange} value={searchStr} />
            <button type="submit">Search</button>
         </form>
      </div>
   );
};

export default Home;

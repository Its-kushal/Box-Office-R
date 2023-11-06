// import { Link } from "react-router-dom";
import { useState } from 'react';
import { searchForShows } from './../apiFiles/tvmaze.js';

const Home = () => {
   const [searchStr, setSearchStr] = useState('');
   const [apiData, setApiData] = useState(null);
   const [apiDataError, setApiDataError] = useState(null);

   // console.log(searchStr);

   const onSearchInputChange = ev => {
      setSearchStr(ev.target.value);
   };

   const onSearch = async ev => {
      // console.log(ev);
      // https://api.tvmaze.com/search/shows?q=girls
      ev.preventDefault();

      try {
         setApiDataError(null);
         const result = await searchForShows(searchStr);
         setApiData(result);
      } catch (error) {
         setApiData(error);
      }
   };

   const renderApiData = () => {
      if (apiDataError) {
         return <div>Error Occured: {apiDataError.message}</div>;
      }
      if (apiData) {
         return apiData.map(data => (
            <div key={data.show.id}>{data.show.name}</div>
         ));
      }
      return null;
   };

   return (
      <div>
         <form onSubmit={onSearch}>
            <input
               type="text"
               onChange={onSearchInputChange}
               value={searchStr}
            />
            <button type="submit">Search</button>
         </form>
         <div>{renderApiData()}</div>
      </div>
   );
};

export default Home;

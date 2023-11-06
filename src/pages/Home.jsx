// import { Link } from "react-router-dom";
import { useState } from 'react';
import { searchForShows,searchForPeople } from './../apiFiles/tvmaze.js';

const Home = () => {
   const [searchStr, setSearchStr] = useState('');
   const [apiData, setApiData] = useState(null);
   const [apiDataError, setApiDataError] = useState(null);
   const [searchOption, setSearchOption] = useState('movies');
   
   // console.log(searchStr);
   
   const onSearchInputChange = ev => {
      setSearchStr(ev.target.value);
   };
   
   const onRadioChange = (ev) => {
      setSearchOption(ev.target.value);
   };

   const onSearch = async ev => {

      ev.preventDefault();

      try {
         setApiDataError(null);
         if(searchOption === 'movies'){
            const result = await searchForShows(searchStr);
            setApiData(result);
         }
         else{
            const result = await searchForPeople(searchStr);
            setApiData(result);   
         }
      } catch (error) {
         setApiData(error);
      }
   };

   const renderApiData = () => {
      if (apiDataError) {
         return <div>Error Occured: {apiDataError.message}</div>;
      }
      if (apiData) {
         return apiData[0].show ? apiData.map(data => (
            <div key={data.show.id}>{data.show.name}</div>
         )) : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
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

            <label>
               Movies
               <input type="radio" value="movies" name="search-options" checked={searchOption === 'movies'} onChange={onRadioChange}/>
            </label>
            <label>
               Actors
               <input type="radio" value="actors" name="search-options" checked={searchOption === 'actors'} onChange={onRadioChange}/>
            </label>
            <button type="submit">Search</button>
         </form>
         <div>{renderApiData()}</div>
      </div>
   );
};

export default Home;

// import { Link } from "react-router-dom";
import { useState } from 'react';
import { searchForShows, searchForPeople } from './../apiFiles/tvmaze.js';
import SearchForm from '../components/searchForm.jsx';
import ActorGrid from '../components/actors/ActorGrid.jsx';
import ShowGrid from '../components/shows/ShowGrid.jsx';

const Home = () => {
   
   const [apiData, setApiData] = useState(null);
   const [apiDataError, setApiDataError] = useState(null);
   

   // console.log(searchStr);

   const onSearch = async ({ q, searchOption}) => {

      try {
         setApiDataError(null);

         let result;

         if (searchOption === 'shows') {
            result = await searchForShows(q);
         } else {
            result = await searchForPeople(q);
         }

         setApiData(result);
      } catch (error) {
         setApiDataError(error);
      }
   };

   const renderApiData = () => {
      if (apiDataError) {
         return <div>Error Occured: {apiDataError.message}</div>;
      }

      if(apiData?.length === 0){
         return <div>No results</div>;
      }
      if (apiData) {
         return apiData[0].show
            ? <ShowGrid shows={apiData}/>
            : <ActorGrid actors={apiData}/>;
      }
      return null;
   };

   return (
      <div>
         <SearchForm
            onSearch={onSearch}
         />
         <div>{renderApiData()}</div>
      </div>
   );
};

export default Home;

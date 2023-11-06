// import { Link } from "react-router-dom";
import { useState } from 'react';
import { searchForShows, searchForPeople } from './../apiFiles/tvmaze.js';
import SearchForm from '../components/searchForm.jsx';

const Home = () => {
   
   const [apiData, setApiData] = useState(null);
   const [apiDataError, setApiDataError] = useState(null);
   

   // console.log(searchStr);

   const onSearch = async ({ q, searchOption}) => {

      try {
         setApiDataError(null);

         let result;

         if (searchOption === 'movies') {
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
      if (apiData) {
         return apiData[0].show
            ? apiData.map(data => (
                 <div key={data.show.id}>{data.show.name}</div>
              ))
            : apiData.map(data => (
                 <div key={data.person.id}>{data.person.name}</div>
              ));
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

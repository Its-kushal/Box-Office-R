// import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { searchForShows, searchForPeople } from './../apiFiles/tvmaze.js';
import SearchForm from '../components/SearchForm.jsx';
import ActorGrid from '../components/actors/ActorGrid.jsx';
import ShowGrid from '../components/shows/ShowGrid.jsx';

const Home = () => {
   const [filter, setFilter] = useState(null);
 
   const { data: apiData, error: apiDataError } = useQuery({
       queryKey: ['search', filter],
       queryFn: () => filter.searchOption === 'shows' ? searchForShows(filter.q) : searchForPeople(filter.q),
       enabled: !!filter,
       refetchOnWindowFocus: false,
   });

   const onSearch = async ({ q, searchOption}) => {
      setFilter({ q, searchOption })
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


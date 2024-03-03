// import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { searchForShows, searchForPeople } from './../apiFiles/tvmaze.js';
import SearchForm from '../components/SearchForm.jsx';
import ActorGrid from '../components/actors/ActorGrid.jsx';
import ShowGrid from '../components/shows/ShowGrid.jsx';
import { TextCenter } from '../components/common/TextCenter';


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
         return <TextCenter>Error Occured: {apiDataError.message}</TextCenter>;
      }

      if(apiData?.length === 0){
         return <TextCenter>No results</TextCenter>;
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


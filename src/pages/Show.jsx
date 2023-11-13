import { useParams } from 'react-router-dom';
import { getShowById } from '../apiFiles/tvmaze.js';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData.jsx';
import Details from '../components/shows/Details.jsx';
import Cast from '../components/shows/Cast.jsx';
import Seasons from '../components/shows/Seasons.jsx';

const Show = () => {
   const { showId } = useParams();

   // const { showData, showError }= useShowById( showId );
   const { data: showData, error: showError } = useQuery({
      queryKey: ['show', showId],
      queryFn: () => getShowById(showId),
      refetchOnWindowFocus: false,
   });

   if (showError) {
      return <div>{`We have an error: ${showError.message}`}</div>;
   }
   if (showData) {
      return (
         <div>
            <ShowMainData
               name={showData.name}
               image={showData.image}
               summary={showData.summary}
               rating={showData.rating}
               genres={showData.genres}
            />
            <div>
               <h2>Details</h2>
               <Details
                  status={showData.status}
                  premiered={showData.premiered}
                  network={showData.network}
               />
            </div>
            <div>
               <h2>Seasons</h2>
               <Seasons seasons={showData._embedded.seasons} />
            </div>
            <div>
               <h2>Cast</h2>
               <Cast cast={showData._embedded.cast} />
            </div>
         </div>
      );
   }

   return <div>Data is loading</div>;
};

export default Show;

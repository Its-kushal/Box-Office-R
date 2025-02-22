import { FlexGrid } from '../common/FlexGrid';
import ShowCard from './ShowCard';
import { useStarredShows } from '../../lib/useStarredShows';
import NotFoundImgSrc from '../../lib/not-found-image.png';

const ShowGrid = ({ shows }) => {
   const [starredShows, dispatchStarred] = useStarredShows();
   const onStarMeClicked = showId => {
      const isStarred = starredShows.includes(showId);

      if (isStarred) {
         dispatchStarred({ type: 'UNSTAR', showId });
      } else {
         dispatchStarred({ type: 'STAR', showId });
      }
   };

   return (
      <FlexGrid>
         {shows.map(data => (
            <ShowCard
               key={data.show.id}
               id={data.show.id}
               name={data.show.name}
               image={data.show.image ? data.show.image.medium : NotFoundImgSrc}
               summary={data.show.summary}
               onStarMeClicked={onStarMeClicked}
               isStarred={starredShows.includes(data.show.id)}
            />
         ))}
      </FlexGrid>
   );
};

export default ShowGrid;

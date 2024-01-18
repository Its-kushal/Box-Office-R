// import { Link } from "react-router-dom";

import { useStarredShows } from '../lib/useStarredShows';

const Starred = () => {
   const [starredShows] = useStarredShows();

   return <div>Starred shows, starred {starredShows.length}</div>;
};

export default Starred;

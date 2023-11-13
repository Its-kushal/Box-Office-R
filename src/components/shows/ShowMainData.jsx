const ShowMainData = (name, image, summary, rating, genres) => {
   return (
      <div>
         <img
            src={image ? image.origiinal : 'not-found-image.png'}
            alt={name}
         />
         <div>
            <h1>{name}</h1>
            <div>{rating.average ? `Rating: ${rating.average}` : 'N/A'}</div>
            <div dangerouslySetInnerHTML={{ __html: summary }} />
            <div>
               Genres:
               <div>
                  {genres.map(genre => (
                     <span key={genre}>{genre}</span>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ShowMainData;

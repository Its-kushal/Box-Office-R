const AppTitle = props => {
   const {
      title = 'Box-Office',
      subtitle = 'Are you looking for a Movie or a Actor ?',
   } = props;

   return (
      <div>
         <h1>{title}</h1>
         <p>{subtitle}</p>
      </div>
   );
};

export default AppTitle;

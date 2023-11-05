// import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {

   const [ inputValue, setInputValue ] = useState('');

   console.log(inputValue);

   const onInputChange = (ev) => {
      setInputValue(ev.target.value);
   }

   return <div>
      <div>{inputValue}</div>
      <input type="text" onChange={onInputChange} value={inputValue}/>
      <button type="button" onClick={() => {
         setInputValue('');
      }}>Update</button>
   </div>;
};

export default Home;

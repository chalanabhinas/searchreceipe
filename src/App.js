import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Recipe from './Recipe';
function App() {
  const API_ID="c7b9e627";
  const APP_KEY="af55350c3060310b30423f575cd97503 ";

  // const [receipes,setreceipes]=useState([]);
  const [receipes, setReceipes]=useState([]);
  const [search, setSearch]=useState('');
  const [query,setQuery]=useState('chicken');
  useEffect(()=>{
    fetchpost();
    },[query]);
const fetchpost= async ()=>{ 
  try{
    const respos= await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${APP_KEY}`);
    setReceipes(respos.data.hits);
  }catch(e) {
    console.log(e);
  }
}
const updatesearch= e=>{
  setSearch(e.target.value);
}
 const getsearch = e=>{
   e.preventDefault();
  setQuery(search);
  setSearch('');
 }
// const getreceipe = async ()=>{
//   const response=await fetch(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${APP_KEY}`);
//   const data= await response.json();
//   setreceipes(data.hits);
//   console.log(data.hits);
// }
  return (
    <>
     <div className='outervox'>
       <form onSubmit={getsearch} className='formcll'>
         <input type="text" className='form-control' value={search} onChange={updatesearch}/>
          <button type="submit" className='btn btn-primary' >SEARCH</button>
       </form>
       <div className='container'>
       <div className='row' style={{marginTop:'50px'}}>
              
              {receipes.map((receipe)=> (
                <Recipe key={receipe.recipe.calories} title={receipe.recipe.label} caloriess={receipe.recipe.calories} image={receipe.recipe.image}/>
              ))}
               
               
            </div>
            </div>
     </div>
    </>
  );
}

export default App;

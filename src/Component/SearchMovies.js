import {useEffect,useContext,useState}from "react";
import { Link } from "react-router-dom";
import { CreateContext } from '../Context/CardContext.jsx';
import './Search.css'
export const SearchMovies=(()=>{
    const [setrender,updaterender]=useState([]);
//var setcard=JSON.parse(localStorage.getItem('searchMovie'));
const {setcard}=useContext(CreateContext);
const Datarender=async()=>{
   
    try{
        let api = `https://api.tvmaze.com/search/shows?q=${setcard}`;
        let res = await fetch(api);
        let data = await res.json();
         updaterender(data)
      }
      catch (error) {
        console.log("error", error);
    }
}
useEffect(() => {
    Datarender();

}, [setcard])


    return(
        <>
        <br/>
        <br/> <br/> <br/>
        <div className="Search-render">
           
               {
                    setrender?.map((e, ind) => ( 
                        <Link className="link1" to={`Singlemovie/${e.show.id}`}>

                        <div >
                            <div>
                                <img  src={e.show?.image?.medium} alt="moviepic" style={{ 'borderRadius': '5px' }} />
                            </div>
                               
                        </div>
                        </Link>
                    ))
                }
        </div>
        </>
    )
})
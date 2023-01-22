import { display } from "@mui/system";
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import './Single.css'

export const Singlemovie=(()=>{
    const [Searchsingle,updatesingle]=useState([]);
    
    const {id}=useParams();
    
    console.log("sdf",id);
    const Datarenderr=async()=>{
       
        try{
            let api = `http://api.tvmaze.com/shows/${id}`;
            let res = await fetch(api);
            let data = await res.json();
           
            updatesingle(data)
             
          }
          catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        Datarenderr();
    
    }, [id])
 


    return(
<>

<br/>
<br/>
<br/>
{console.log(Searchsingle)}
{
                   

                        <div className='Singlem'>
                            <div>
                                <img src={Searchsingle?.image?.medium} alt="moviepic"  />
                            </div>
                             <div>
                             <h3>Title: {Searchsingle?.name}</h3><br/>
                             <h4>Year: {new Date(Searchsingle?.premiered).getFullYear()}</h4><br/>
                             <h4>Rating: {Searchsingle?.rating?.average}/10</h4><br/>
                             <h4>Movie Description:</h4>
                             {Searchsingle?.summary}
                             </div>
                        </div>
                  
                }

</>
    )
})
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export const Home = (() => {
    const { id } = useParams();

    const [ComedySet, ComedyUpdate] = useState([]);
    const [FamilySet, FamilyUpdate] = useState([]);
    const [CrimeSet, CrimeUpdate] = useState([]);
    const [MysterySet, MysteryUpdate] = useState([]);
    const [ThrillerSet, ThrillerUpdate] = useState([]);
    const [ActionSet, ActionUpdate] = useState([]);

    const DataFetching = async () => {
        try {
            const res = await fetch(`https://api.tvmaze.com/shows?page=1`);
            const movies = await res.json();
            var ComedyArr = [];
            var FamilyArr = [];
            var CrimeArr = [];
            var MysteryArr = [];
            var ThrillerArr = [];
            var ActionArr = [];
            movies.map((elem) => {

                if (elem.genres.includes("Comedy")) {
                    ComedyArr.push(elem);
                }


            })
            movies.map((elem) => {

                if (elem.genres.includes("Family")) {
                    ;
                    FamilyArr.push(elem);
                }


            })
            movies.map((elem) => {

                if (elem.genres.includes("Crime")) {
                    ;
                    CrimeArr.push(elem);
                }


            })
            movies.map((elem) => {

                if (elem.genres.includes("Mystery")) {
                    ;
                    MysteryArr.push(elem);
                }


            })
            movies.map((elem) => {

                if (elem.genres.includes("Thriller")) {
                    ;
                    ThrillerArr.push(elem);
                }


            })
            movies.map((elem) => {

                if (elem.genres.includes("Action")) {
                    ;
                    ActionArr.push(elem);
                }


            })
            ComedyUpdate(ComedyArr);
            FamilyUpdate(FamilyArr);
            CrimeUpdate(CrimeArr);
            MysteryUpdate(MysteryArr);
            ThrillerUpdate(ThrillerArr);
            ActionUpdate(ActionArr);

        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        DataFetching();
    }, []);
    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <h1 style={{ marginLeft: "10px"}}>Comedy</h1>
           
            <div style={{ display: "flex", width: "100%", overflow:"scroll"}}>
                {
                    ComedySet?.map((movie, ind) => (
                      
                       <Link className="link1" to={`Singlemovie/${movie.id}`}>   
                     
                        <div className='movieCard' key={ind} style={{ marginLeft: "10px" }}>
                              
                            <div>
                                <img src={movie.image.medium} alt="moviepic" style={{ 'borderRadius': '5px' }} />
                            </div>

                        </div>
                        </Link>
                    ))
                }
            </div>


            <h1 style={{ marginLeft: "10px" }}>Family</h1>
        
            <div style={{ display: "flex", width: "100%", overflow:"scroll"}}>
                {
                    FamilySet?.map((movie, ind) => (
                        <Link className="link1" to={`Singlemovie/${movie.id}`}>
                        <div className='movieCard' key={ind} style={{ marginLeft: "10px" }}>
                            <div>
                                <img src={movie.image.medium} alt="moviepic" style={{ 'borderRadius': '5px' }} />
                            </div>

                        </div>
                        </Link>
                    ))
                }
            </div>
            <h1 style={{ marginLeft: "10px" }}>Crime</h1>
         
            <div style={{ display: "flex", width: "100%", overflow:"scroll"}}>
                {
                    CrimeSet?.map((movie, ind) => (
                        <Link className="link1" to={`Singlemovie/${movie.id}`}>

                        <div className='movieCard' key={ind} style={{ marginLeft: "10px" }}>
                            <div>
                                <img src={movie.image.medium} alt="moviepic" style={{ 'borderRadius': '5px' }} />
                            </div>

                        </div>
                        </Link>
                    ))
                }
            </div>
            <h1 style={{ marginLeft: "10px" }}>Mystery</h1>
            <div style={{ display: "flex", width: "100%", overflow:"scroll"}}>
                {
                    MysterySet?.map((movie, ind) => (
                        <Link className="link1" to={`Singlemovie/${movie.id}`}>
                        <div className='movieCard' key={ind} style={{ marginLeft: "10px" }}>
                            <div>
                                <img src={movie.image.medium} alt="moviepic" style={{ 'borderRadius': '5px' }} />
                            </div>

                        </div>
                        </Link>
                    ))
                }
            </div>
            <h1 style={{ marginLeft: "10px" }}>Thriller</h1>
            <div style={{ display: "flex", width: "100%", overflow:"scroll"}}>
                {
                    ThrillerSet?.map((movie, ind) => (
                        <Link className="link1" to={`Singlemovie/${movie.id}`}>
                        <div className='movieCard' key={ind} style={{ marginLeft: "10px" }}>
                            <div>
                                <img src={movie.image.medium} alt="moviepic" style={{ 'borderRadius': '5px' }} />
                            </div>

                        </div>
                        </Link>
                    ))
                }
            </div>
            <h1 style={{ marginLeft: "10px" }}>Action</h1>

            <div style={{ display: "flex", width: "100%",overflow:"scroll" }}>
                {
                    ActionSet?.map((movie, ind) => (
                        <Link className="link1" to={`Singlemovie/${movie.id}`}>
                        <div className='movieCard' key={ind} style={{ marginLeft: "10px" }} >
                            <div>
                                <img src={movie.image.medium} alt="moviepic" style={{ 'borderRadius': '5px' }} />
                            </div>

                        </div>
                        </Link>
                    ))
                }
            </div>
        </>

    )



})
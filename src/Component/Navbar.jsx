import './Navbar.css';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateContext } from '../Context/CardContext.jsx';
import { Link, useParams } from 'react-router-dom';
import { Singlemovie } from './Singlemovie';

export const Navbar = (() => {
  const navigate = useNavigate();
  const { Handlecart } = useContext(CreateContext)
  const { id } = useParams();
  const [Searchtext, Updatetext] = useState('');
  const [Searchdata, updatedata] = useState([])
  let Timeid;
  useEffect(() => {

    Timeid = setTimeout(() => {
      MoviesSearch()
    }, 500)

    return () => clearTimeout(Timeid);

  }, [Searchtext])

  const MoviesSearch = async (e) => {
    try {

      let api = `http://api.tvmaze.com/search/shows?q=${Searchtext}`;
      let res = await fetch(api);
      let data = await res.json();
      let SearchArr = []
      updatedata(data);

    }
    catch (error) {
      console.log("error", error);
    }

  }
  const SearchFunction = (() => {
    Handlecart(Searchtext)
    navigate('/search');
  })

  return (

    <>
      <nav className="navbar">
        <div className="navbar-container container">

          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <Link to="/" ><h2><i>Home</i></h2></Link>




            <li><input type="search" onChange={(e) => Updatetext(e.target.value)} className="search-input" placeholder="Enter Your Movies..." /></li>

            <li><button className='Search-button' onClick={SearchFunction}>Search</button></li>
          </ul>
         
        </div>

      </nav>

      {
        Searchdata ? (<div className='Movie-suggetions'>
          {
            Searchdata?.map((e, ind) => (
             <Link className="link1" to={`Singlemovie/${e.show.id}`}>   
           <div className='movieCardS'style={{ marginLeft: "10px" }} >
                {console.log(e)}

                <div>
                  <img src={e.show?.image?.medium} alt="moviepic" style={{ 'borderRadius': '5px' }} />
                </div>
                <div>
                  {e.show?.name}
                </div>
              </div>
             </Link>
            ))
          }
        </div>) : ("")
      }
    </>
  )
})
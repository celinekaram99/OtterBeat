// eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from 'react';

// function FavoritePage() {
//   const [favoriteSongs, setFavoriteSongs] = useState([]);

//   useEffect(() => {
//     const storedFavorites = localStorage.getItem('favoriteSongs');
//     if (storedFavorites) {
//       setFavoriteSongs(JSON.parse(storedFavorites));
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Favorite Songs</h1>
//       {favoriteSongs.length > 0 ? (
//         <ul>
//           {favoriteSongs.map((song, index) => (
//             <li key={index} >
//               <h3>{song.title}</h3>
//               <p>Duration: {song.duration}</p>
//               <p>Release Year: {song.releaseYear}</p>
//             </li>
//           ))}
           
//         </ul>
       
//       ) : (
//         <p>No favorite songs found.</p>
//       )}
//     </div>
//   );
// }

// export default FavoritePage;

// eslint-disable-next-line no-unused-vars
import React from 'react';
import FavoriteList from '../../comps/favoraitelist';
import Topbar from '../../comps/Navbar/topbar';
import { useNavigate } from 'react-router-dom';
import Scroll from '../Scroll';

const handleSubmit = (event) => {
  // event.preventDefault();
  navigate('/home');
};

function FavPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Topbar />
      <h2>Favorite Songs</h2>
      <FavoriteList />
      <Scroll /> 

    </div>
  );
}

export default FavPage;

// /* eslint-disable react/prop-types */
// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { FavoriteBorder, Favorite } from "@mui/icons-material";

// export default function Feed({ artist, song }) {
//   const [isFavorite, setIsFavorite] = useState(false);

//   const toggleFavorite = () => {
//     setIsFavorite(!isFavorite);
//     add(song)
//   };

//   const add =(song)=>{
//     console.log(song)
//     let arr=localStorage.getItem("favortie1")||"[]"
//     console.log(arr)
//     //arr=arr.trim()
  
//    arr=JSON.parse(arr)
   
//     arr.push(song)
//     localStorage.setItem("favortie1",JSON.stringify(arr))
//     console.log()

//   }

//   return (
//     <div className="bg-light-blue dib br3 fl w-25 pa3 ma2 grow bw2 shadow-5">
//       <div>
//         <h1>{artist}</h1>
//         <div key={song._id}>
//           <p className="mb1">Song ID: {song._id}</p>
//           <p className="mb1">Title: {song.title}</p>
//           <p className="mb1">Duration: {song.duration}</p>
//           <p className="mb1">Release Year: {song.releaseYear}</p>
//         </div>
//       </div>

//       <button
//         className="f4 mt2 red bg-light-white br2"
//         onClick={toggleFavorite} 
//       >
//         {isFavorite ? <Favorite /> : <FavoriteBorder />}
//       </button>
//     </div>
//   );
// }



import React, { useState } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

export default function Feed({ artist, song }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      addFavorite(song);
    } else {
      removeFavorite(song);
    }
  };

  const addFavorite = (song) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    favorites.push(song);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const removeFavorite = (song) => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    favorites = favorites.filter((fav) => fav._id !== song._id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div className="bg-light-blue dib br3 fl w-25 pa3 ma2 grow bw2 shadow-5">
      <div>
        <h1>{artist}</h1>
        <div key={song._id}>
          <p className="mb1">Song ID: {song._id}</p>
          <p className="mb1">Title: {song.title}</p>
          <p className="mb1">Duration: {song.duration}</p>
          <p className="mb1">Release Year: {song.releaseYear}</p>
        </div>
      </div>

      <button
        className="f4 mt2 red bg-light-white br2"
        onClick={toggleFavorite}
      >
        {isFavorite ? <Favorite /> : <FavoriteBorder />}
      </button>
    </div>
  );
}

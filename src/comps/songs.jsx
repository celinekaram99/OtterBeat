// /* eslint-disable react/prop-types */
// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import Favorites from "./favoraitelist";

// // rendering a collection of Feed components 
// const Songs = ({ data }) => {

//   return (
//     <div>
//       <ul>
//         {data.map((songs) => 
//         (songs.songs.map((song,index) => (
//           <li key={index} className="f4 mt2 red bg-light-white br2">
//             <h3>{song.title}</h3>
//             <p>{song.duration}</p>
//             <p>{song.releaseYear}</p>
//             <Feed artist={data.artist} song={song}/>
//           </li>
//         ))
//       ))}
//       </ul>

//     </div>
//   );
// }

// export default Songs;


/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Feed from "./feed";

// rendering a collection of Feed components 
const Songs = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((i) => (
        i.songs.map((s) => (
          <Feed key={s._id} artist={i.artist} song={s} />
        ))
      ))}
    </div>
  );
}

export default Songs;
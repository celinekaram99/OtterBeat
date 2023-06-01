// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Feed from './feed';

function FavoriteList() {
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  useEffect(() => {
    const storedSongs = localStorage.getItem('favoriteSongs');
    if (storedSongs) {
      setFavoriteSongs(JSON.parse(storedSongs));
    }
  }, []);

  const toggleFavorite = (songId) => {
    const updatedSongs = favoriteSongs.map((song) =>
      song._id === songId ? { ...song, isFavorite: !song.isFavorite } : song
    );
    setFavoriteSongs(updatedSongs);
    localStorage.setItem('favoriteSongs', JSON.stringify(updatedSongs));
  };

  const removeFavorite = (songId) => {
    const updatedSongs = favoriteSongs.filter((song) => song._id !== songId);
    setFavoriteSongs(updatedSongs);
    localStorage.setItem('favoriteSongs', JSON.stringify(updatedSongs));
  };

  return (
    <div>
      {favoriteSongs.map((song) => (
        <Feed
          key={song._id}
          song={song}
          onToggleFavorite={toggleFavorite}
          onRemoveFavorite={removeFavorite}
        />
      ))}
    </div>
  );
}

export default FavoriteList;



// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from 'react';
// import Feed from './feed';

// function FavoriteList() {
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Call API to fetch favorite songs list
//     fetchFavoriteSongs()
//       .then((data) => {
//         setFavoriteSongs(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log('Error fetching favorite songs:', error);
//         setLoading(false);
//       });
//   }, []);

//   const fetchFavoriteSongs = () => {
//     // Replace with your API endpoint URL to fetch favorite songs list from the server
//     const url = 'TBD: API endpoint URL for fetching favorite songs';
//     return fetch(url)
//       .then((response) => response.json())
//       .catch((error) => {
//         console.log('Error fetching favorite songs:', error);
//         throw error;
//       });
//   };

//   const toggleFavorite = (songId) => {
//     const updatedSongs = favoriteSongs.map((song) => {
//       if (song._id === songId) {
//         return {
//           ...song,
//           isFavorite: !song.isFavorite,
//         };
//       }
//       return song;
//     });
//     setFavoriteSongs(updatedSongs);
//     updateFavoriteStatus(songId, !isSongFavorite(songId));
//   };

//   const updateFavoriteStatus = (songId, isFavorite) => {
//     if (isFavorite) {
//       // Send songId to add-to-favorites API endpoint
//       addToFavorites(songId);
//     } else {
//       // Send songId to remove-from-favorites API endpoint
//       removeFromFavorites(songId);
//     }
//   };

//   const addToFavorites = (songId) => {
//     // Replace with your API endpoint URL for adding a song to favorites
//     const url = 'TBD: API endpoint URL for adding to favorites';
//     // Make API call to add songId to favorites list on the server
//     fetch(url, {
//       method: 'POST',
//       body: JSON.stringify({ songId }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .catch((error) => {
//         console.log('Error adding to favorites:', error);
//       });
//   };

//   const removeFromFavorites = (songId) => {
//     // Replace with your API endpoint URL for removing a song from favorites
//     const url = 'TBD: API endpoint URL for removing from favorites';
//     // Make API call to remove songId from favorites list on the server
//     fetch(url, {
//       method: 'DELETE',
//       body: JSON.stringify({ songId }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .catch((error) => {
//         console.log('Error removing from favorites:', error);
//       });
//   };

//   const isSongFavorite = (songId) => {
//     // Check if songId exists in the favoriteSongs list
//     return favoriteSongs.some((song) => song._id === songId && song.isFavorite);
//   };

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         favoriteSongs.map((song) => (
//           <Feed
//             key={song._id}
//             song={song}
//             toggleFavorite={toggleFavorite}
//             isFavorite={isSongFavorite(song._id)}
//           />
//         ))
//       )}
//     </div>
//   );
// }

// export default FavoriteList;

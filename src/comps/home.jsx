// page 1
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
// import data from './data/db.json';

const  MainScreen = () =>  {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    const filteredResults = data.filter((artist) => 
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setResults(filteredResults);
  
  }

  return (
    <div>
      <h1 >Search for an Artist </h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter an artist's name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search<SearchIcon></SearchIcon></button>
      </form>
      {results.length > 0 ? (
        <div>
          <h2>Results:</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Duration</th>
                <th>Release Year</th>
              </tr>
            </thead>
            <tbody>
              {results.map((artist) => (
                <React.Fragment key={artist.id}>
                  <tr>
                    <td colSpan="4">{artist.name}</td>
                  </tr>
                  {artist.songs.map((song) => (
                    <tr key={song.id}>
                      <td>{song.id}</td>
                      <td>{song.title}</td>
                      <td>{song.duration}</td>
                      <td>{song.releaseYear}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

export default MainScreen;

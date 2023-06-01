// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Songs from '../comps/songs';
import Topbar from '../comps/Navbar/topbar';
import Scroll from './Scroll'; 

function Home() {
  const [data, setData] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data.json');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredData = data.filter((item) => {
    return item.artist.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="tc">
      <Topbar onSearchChange={onSearchChange} />
      <Scroll> 
        <Songs data={filteredData} />
      </Scroll> 
    </div>
  );
}

export default Home;

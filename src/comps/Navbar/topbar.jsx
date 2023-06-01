// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Person } from "@mui/icons-material";
import './topbar.css';

// eslint-disable-next-line react/prop-types
const Topbar = ({ searchfield, onSearchChange }) => {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    navigate("/"); // Route to the login page
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" className="logo">OtterBeats</Link>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <Search />
          <input
            placeholder="Search for the Artist"
            type="search"
            className="searchInput"
            value={searchfield}
            onChange={onSearchChange}
          />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/" className="topbarLink">Home Page</Link>
          <Link to="/FavPage" className="topbarLink">Favorite List</Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem" onClick={handleLogout}>
            <Person />
            <span className="topbarLink">Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;

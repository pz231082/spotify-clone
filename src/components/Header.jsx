import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/042/148/631/non_2x/spotify-logo-spotify-social-media-icon-free-png.png"
          alt="Spotify"
          className="logo-image"
        />
        <h1>Spotify</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#download">Download</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

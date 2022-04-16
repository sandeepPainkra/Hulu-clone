import {
  FlashOn,
  Home,
  LiveTv,
  PersonOutline,
  Search,
  VideoLibrary,
} from "@material-ui/icons";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <div className="header_leftIcon">
          <Home />
          <p>home</p>
        </div>
        <div className="header_leftIcon">
          <FlashOn />
          <p>Trending</p>
        </div>
        <div className="header_leftIcon">
          <LiveTv />
          <p>Verified</p>
        </div>
        <div className="header_leftIcon">
          <VideoLibrary />
          <p>Collections</p>
        </div>
        <div className="header_leftIcon">
          <Search />
          <p>Search</p>
        </div>
        <div className="header_leftIcon">
          <PersonOutline />
          <p>Account</p>
        </div>
      </div>
      <div className="header_right">
        <h1 className="logo">hulu</h1>
      </div>
    </div>
  );
};

export default Header;

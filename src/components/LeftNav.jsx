import React, { Children } from "react";
import "./LeftNav.css";
import HomeIcon from '@mui/icons-material/Home';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { NavLink } from "react-router-dom";

const LeftNav = ({children}) => {
  const navItems = [
    {
      path: "/",
      name: "Home",
      icon: <HomeIcon style={{color: "#ffffff"}} />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        {
          navItems.map((item, index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassname = "active">
              <div className="icon">{item.icon}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default LeftNav;

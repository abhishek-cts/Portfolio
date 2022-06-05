import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../Images/logo.png";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar
      navColor1="white"
      navColor2="hsl(60, 22%, 80%)"
      burgerColor="white"
      burgerColorHover="hsl(60, 22%, 80%)"
      logo={logo}
      logoWidth="250px"
      logoHoverColor="hsl(60, 22%, 80%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1ColorHover="white"
      link1Color="black"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="black"
      profileIconColorHover="white"
    />
  );
};

export default Header;

import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import Checkbox from "./Checkbox/Checkbox";
import MyButton from "./MyButton/button";
import logo from "../assets/logo.png";
import ExitIconSVG  from './svgs/ExitIconSvg';

const setIsActive = ({ isActive }) => (isActive ? "active-link" : "");

const Header = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);

  const { theme, setTheme } = useContext(ThemeContext);
  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuth(false);
    navigate("/");
  };

  const changeTheme = () => {
    setChecked(!checked);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
		<div className="header">
			<div className="header-logo">
				<img src={logo} />
			</div>
			<div className="header-wrapper">
				<NavLink
					data-testid="main-link"
					to="/"
					style={({ isActive }) => ({ color: isActive ? "red" : "" })}
				>
					Home
				</NavLink>
				<NavLink
					to="/about"
					className={setIsActive}
					data-testid="about-link"
				>
					About
				</NavLink>
				<NavLink to="/posts" className={setIsActive}>
					Posts
				</NavLink>
				<NavLink to="/login" className={setIsActive}>
					LogIn
				</NavLink>
				<div>
					<Checkbox checked={checked} changeTheme={changeTheme} />
				</div>
			</div>
			{/* <MyButton onClick={()=>setTheme('light')}>light</MyButton>
      <MyButton onClick={()=>setTheme('dark')}>dark</MyButton> */}

			{/* <MyButton onClick={logout}>LogOut</MyButton> */}

			<div className="exit-icon" onClick={logout}>
				<ExitIconSVG fill="currentColor" width="100%" height="100%" />
			</div>
		</div>
  );
};

export default Header;

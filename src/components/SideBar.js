/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// Styles
const drawerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background: linear-gradient(to right, #4f46e5, #6d28d9, #ec4899);
  border-right: 2px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

const drawerOpenStyle = css`
  transform: translateX(0);
`;

const toggleButtonStyle = css`
  position: fixed;
  top: 1rem;
  left: 1rem;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  transition: background 0.3s ease;
  &:hover {
    background: #3b82f6;
  }
`;

const menuStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 100%;
  padding-top: 2rem;
`;

const linkStyle = css`
  width: 100%;
  text-align: center;
  padding: 1rem;
  color: white;
  font-weight: bold;
  border-radius: 0.375rem;
  transition: background 0.3s ease, color 0.3s ease;
  cursor: pointer;
  &.active {
    background: #1f2937;
    color: #ffffff;
  }
  &:hover {
    background: #1f2937;
    color: #ffffff;
  }
`;

const contentStyle = css`
  transition: margin-left 0.3s ease;
  margin-left: 0;
  padding: 1rem;
`;

const contentShiftStyle = css`
  margin-left: 250px;
`;

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button css={toggleButtonStyle} onClick={toggleDrawer}>
        ☰
      </button>
      <section css={[drawerStyle, isOpen && drawerOpenStyle]}>
        <ul css={menuStyle}>
          <NavLink
            to="/"
            css={linkStyle}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleDrawer}
          >
            🏠 Home
          </NavLink>
          <NavLink
            to="addnewsong"
            css={linkStyle}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleDrawer}
          >
            Add New Song
          </NavLink>
          <NavLink
            to="statistics"
            css={linkStyle}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleDrawer}
          >
            Statistics
          </NavLink>
        </ul>
      </section>
      <main css={[contentStyle, isOpen && contentShiftStyle]}>
        {/* The main content of your app goes here */}
      </main>
    </>
  );
};

export default SideBar;

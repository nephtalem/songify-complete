/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const headerStyle = css`
  padding: 0.5rem 0.5rem;
  height: 4rem;
  background: linear-gradient(to right, #4f46e5, #3b82f6); /* Indigo gradient */
`;

const navStyle = css`
  text-align: center;
`;

const titleStyle = css`
  font-size: 1.25rem;
  font-weight: bold;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  border-radius: 0.75rem;
  margin: auto;
  width: 8rem;
  padding: 0.25rem;
  background-color: #334155; /* Slate color */
  color: white;
`;

const Header = () => {
  return (
    <header css={headerStyle}>
      <nav css={navStyle}>
        <h1 css={titleStyle}>Songify 🎧</h1>
      </nav>
    </header>
  );
};

export default Header;

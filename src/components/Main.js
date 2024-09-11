/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import LocalRoutes from "./LocalRoutes";

// Styled Section using Emotion
const Section = styled.section`
  height: 100vh; /* Full viewport height */
  width: 100%; /* Full width on small screens */
  overflow-y: scroll; /* Enable vertical scrolling */
`;

const Main = () => {
  return (
    <Section>
      <LocalRoutes />
    </Section>
  );
};

export default Main;

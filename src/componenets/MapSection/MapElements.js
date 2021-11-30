import styled from "styled-components";
import colors from "../colors";
export const MapSectionContainer = styled.div`
  background: ${colors.background};
  display: flex;
  flex-direction: column;

  direction: rtl;
  align-items: center;
  height: 900px;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const H1 = styled.h1`
  color: ${colors.primary};
`;

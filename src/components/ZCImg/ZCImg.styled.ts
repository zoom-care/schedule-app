import styled from "styled-components";

export const ZCImg = styled.img<{ maxWidth?: string }>`
  width: ${(props) => (props.width ? props.width : "100%")};
  max-width: ${(props) => props.maxWidth && "100%"};
  height: ${(props) => (props.height ? props.height : "auto")};

  &.mx-auto {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

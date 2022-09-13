import styled from "styled-components";

export const Image = styled.img<{rounded: boolean}>`
    height: 80%;
    width: auto;
    margin: 12px;
    ${({ rounded }) => rounded ? 'border-radius: 50%' : '' }
`;
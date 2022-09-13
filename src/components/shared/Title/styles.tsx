import styled from "styled-components";

export const Subtitle = styled.h3`
    text-transform: uppercase;
    padding: 0;
    margin: 0;
`;

export const Title = styled.h1<{color: 'primary' | 'secondary'}>`
    color: ${({ color }) => color === 'primary' ? 'black' : '#24C0E8' };
    font-size: ${({ color }) => color === 'primary' ? '36px' : '24px' };
    margin: ${({ color }) => color === 'primary' ? '0 0 10px 0' : '0' };
    padding: 0;
    font-weight: 400;
`;

import styled from 'styled-components';

export const CardContainer = styled.div`
    border-radius: 8px;
    max-width: 1164px;
    width: 100%;
    margin: 24px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 36px;
    height: auto;
    box-sizing: border-box;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const ProviderContainer = styled.div`
    display: flex;
    height: 150px;
    width: 100%;
    padding: 12px;
`;

export const ProviderContent = styled.div`
    height: 50%;
    width: 100%;
    margin: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
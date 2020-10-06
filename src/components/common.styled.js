import styled from 'styled-components';

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 20px 30px;
    box-sizing: border-box;

    background: white;
    border-radius: 5px;

    height: 70vh;
    width: 45%;
    overflow: auto;
`;

export const HeadingWrapper = styled.div`
    font-size: 1.2rem;
    color: black;
    font-weight: bold;

    margin-bottom: 10px;
`;
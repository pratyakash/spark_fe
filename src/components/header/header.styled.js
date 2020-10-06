import styled from 'styled-components';

export const Wrapper = styled.div`
    background: white;
    padding: 10px 20px;
    height: 70px;

    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ContentWrapper = styled.div`
    width: 70%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoWrapper = styled.div`
    width: 30%;
    
    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-weight: bolder;
    color: #841FDD;
`;

export const TabWrapper = styled.div`
    width: 40%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const TabContent = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        cursor: pointer;
    }
`;

export const GetInTouchWrapper = styled.div`
    padding: 10px 20px;

    border-radius: 5px;
    border: 1px solid #ccc;
`;
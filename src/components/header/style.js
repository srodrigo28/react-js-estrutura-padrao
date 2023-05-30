import styled from "styled-components";

export const Container = styled.div`
   height: 10vh;
    width: 100vw;
    color: #fff;
    background-color: darkviolet;

    display: flex;
    align-items: center;
    justify-content: center;

    > nav ul {
        display: flex;
        gap: 50px;
        padding: 20px;
    }
    > ul li{
        
    }
    > nav ul li:hover{
        background-color: #fff;
        color: #000;
        padding: 5px;
    }

`;
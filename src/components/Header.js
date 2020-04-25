import React from 'react'
import styled from 'styled-components';

export const Header = () => {
    return (
        <Head>Trello</Head>
    );
}

const Head = styled.div`
    position: fixed;
    top: 0;
    font-weight: bold;
    height: 80px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    color: lightgray;
    font-family: cursive;
    background: rgb(0,103,163);
    border: 2px solid black;
    z-index: 5;
`

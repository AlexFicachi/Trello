import React, {useContext} from 'react'
import styled from 'styled-components';
import { Context } from '../Context';

export const Header = () => {
    const myContext = useContext(Context);
    const { header } = myContext.theme.color;
    return (
        <Head
            myStyle={`
                background: ${header};
            `}
        >
            <Logo>Trello</Logo>
            <Text>Made by Alejandro (Alex) Ficachi 04/30/2020</Text>
        </Head>
    );
}

const Head = styled.div`
    position: fixed;
    top: 0;
    height: 80px;
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    z-index: 5;
    flex-direction: column;
    box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.5);
    ${({myStyle})=>myStyle}
`
const Text = styled.div`
    color: white;
`

const Logo = styled.div`
    font-weight: 900;
    font-family: cursive;
    color: lightgray;
`
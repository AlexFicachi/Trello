import React, {useContext} from 'react'
import styled from 'styled-components';
import { Context } from '../../Context';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {Link} from './Link';
export const Header = () => {
    const myContext = useContext(Context);
    const { header } = myContext.theme.color;
    return (
        <Head
            myStyle={`
                background: ${header};
            `}
        >
            <LinkContainer>
                <Link
                    text={'Alex Ficachi'}
                    icon={<FaLinkedin/>}
                    link={'https://www.linkedin.com/in/alex-ficachi-a74b08168/'}
                />
                <Link
                    text={'source code'}
                    icon={<FaGithub/>}
                    link={'https://github.com/AlexFicachi/Trello'}
                    code
                />
            </LinkContainer>
        </Head>
    );
}

const Head = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    height: 80px;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 5;
    color: white;
    ${({myStyle})=>myStyle}
`

const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 250px;
`
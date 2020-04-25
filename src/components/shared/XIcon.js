import React, {useContext} from 'react';
import {Icon} from './Icon';
import styled from 'styled-components';
import {IoMdClose} from 'react-icons/io';
import {Context} from '../../Context';

export const XIcon = () => {
    const myContext = useContext(Context);
    const color = myContext.theme.color.columnText;

    return (
        <Wrapper
            myStyle={`
                color: ${color}; 
            `}
        >
            <Icon
                icon={<IoMdClose size={24}/>}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 24px;
    cursor: pointer;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }

    ${({myStyle})=>myStyle}
`



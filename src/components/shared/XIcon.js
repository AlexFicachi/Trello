import React from 'react';
import {Icon} from './Icon';
import styled from 'styled-components';
import {IoMdClose} from 'react-icons/io';

export const XIcon = () => {
    return (
        <Wrapper>
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
    & *{
        color: ${({color})=>color};
    }
    &:hover {
        opacity: 1;
    }
`



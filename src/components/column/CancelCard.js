import React, {useContext} from 'react'
import styled from 'styled-components';
import {IoMdClose} from 'react-icons/io';
import {Icon} from '../shared/Icon';
import {Context} from '../../Context';

export const CancelCard = () => {
    const myContext = useContext(Context);
    const color = myContext.theme.color.columnText;

    return (
        <Wrapper color={color}>
            <Icon
                icon={<IoMdClose size={24}/>}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 24px;
    display: inline-flex;
    cursor: pointer;
    opacity: 0.7;
    & *{
        color: ${({color})=>color};
    }
    &:hover {
        opacity: 1;
    }
`

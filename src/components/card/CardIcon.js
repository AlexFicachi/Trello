import React, {useContext} from 'react'
import styled from 'styled-components';
import {GoPencil} from 'react-icons/go';
import {Icon} from '../shared/Icon';
import {Context} from '../../Context';

export const CardIcon = () => {
    const myContext = useContext(Context);
    const {columnText} = myContext.theme.color;
    const {toggleEditCardInput} = myContext.functions;
    const {cardIndex} = myContext;
    const {columnIndex} = myContext;

    return (
        <Wrapper
            onClick={()=>toggleEditCardInput(cardIndex, columnIndex)}
        >
            <Icon
                icon={<GoPencil size={15} color={columnText}/>}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: none;
    justify-content: center;
    padding: 5px 0;
    position: absolute;
    margin-top: 2px;
    margin-right: 2px;
    top: 0;
    right: 0;
    height: 28px;
    width: 28px;
    border-radius: 3px;
    background: rgb(244,245,247);
    opacity: 0.7;
    &:hover{
        background: rgb(218,219,226);
        opacity: 1;
    }
`

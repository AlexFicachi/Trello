import React, {useContext} from 'react'
import styled from 'styled-components';
import {IoMdClose} from 'react-icons/io';
import {Icon} from '../shared/Icon';
import {Context} from '../../Context';

export const ColumnIcon = () => {
    const myContext = useContext(Context);
    const {columnText} = myContext.theme.color;
    const {deleteColumn} = myContext.functions;
    const {columnIndex} = myContext;

    return (
        <Wrapper
            myStyle={`
                & *{
                    color: ${columnText};
                }
            `}
            onClick={()=>deleteColumn(columnIndex)}
        >

            <Icon
                icon={<IoMdClose size={32}/>}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    justify-self: end;
    opacity: 0.7;
    border-radius: 3px;
    margin-top: -2px;
    margin-right: -4px;
    cursor: pointer;
    &:hover {
        background: rgb(218,219,226);
        opacity: 1;
    }
    ${({myStyle})=>myStyle};
`
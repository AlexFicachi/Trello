import React from 'react'
import styled from 'styled-components';
import {IoMdClose} from 'react-icons/io';
import {Icon} from '../shared/Icon';

export const ColumnIcon = () => {
    return (
        <Wrapper>
            <Icon
                icon={<IoMdClose size={32}/>}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border-radius: 3px;
    margin-top: -2px;
    margin-right: -2px;
    cursor: pointer;
    &:hover {
        background: rgb(218,219,226);
    }
`
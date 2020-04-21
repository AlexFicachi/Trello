import React, {useContext} from 'react'
import styled from 'styled-components';
import {Context} from '../../Context';
import {GoPencil} from 'react-icons/go';

export const RegularCard = () => {
    let myContext = useContext(Context);
    return (
        <Wrapper>
            {myContext.name}
        </Wrapper>
    )
}

let Wrapper = styled.div`
    background: white;
    width: 256px;
    line-height: 1.5em;
    padding: 6px 5px 5px 11px;
    border-radius: 4px;
    min-height: 32px;
    cursor: pointer;
    box-shadow: 0px 1px 0px 0px #aaa;
    margin-bottom: 8px;
    &:hover{
        background: rgb(244,245,247);
    }
`

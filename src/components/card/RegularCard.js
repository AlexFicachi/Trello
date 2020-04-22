import React from 'react'
import styled from 'styled-components';
import {RegularCardText} from './RegularCardText';
import {CardIcon} from './CardIcon';

export const RegularCard = () => {
    return (
        <Wrapper>
            <RegularCardText/>
            <CardIcon/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    background: white;
    width: 100%;
    line-height: 1.5em;
    padding: 5px 5px 5px 8px;
    border-radius: 4px;
    min-height: 32px;
    cursor: pointer;
    box-shadow: 0px 1px 0px 0px #aaa;
    margin-bottom: 8px;
    &:hover{
        background: rgb(244,245,247);
        & div:last-of-type{
            display: flex;
        }
    }
`

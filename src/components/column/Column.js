import React, {useContext} from 'react';
import styled from 'styled-components';
import {ColumnHeader} from './ColumnHeader';
import {ColumnBody} from './columnbody/ColumnBody';
import {Context} from '../../Context';

export const Column = () => {
    const myContext = useContext(Context);
    const color = myContext.theme.color.columnText

    return (

        <Wrapper 
            myStyle={`
                color: ${color};
            `}
        >
            <ColumnHeader/>
            <ColumnBody/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-basis: 272px;
    background: rgb(235,236,240);
    border-radius: 3px;
    display: inline-flex;
    flex-direction: column;
    margin-right: 8px;
    padding: 5px;
    padding-right: 8px;
    padding-left: 8px;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 100px;
    max-height: 100%;
    ${({myStyle})=>myStyle}
`

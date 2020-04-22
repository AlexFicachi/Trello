import React, {useContext} from 'react';
import styled from 'styled-components';
import {ColumnHeader} from './ColumnHeader';
import {ColumnMain} from './ColumnMain';
import {ColumnFoot} from './ColumnFoot';
import {Context} from '../../Context';


export const Column = () => {

    let myContext = useContext(Context);

    let color = myContext.theme.color.columnText

    return (
        <Wrapper color={color}>
            <ColumnHeader/>
            <ColumnMain/>
            <ColumnFoot/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-width: 272px;
    width: 1px;
    background: rgb(235,236,240);
    border-radius: 3px;
    display: inline-block;
    margin-right: 8px;
    padding: 5px;
    padding-right: 8px;
    padding-left: 8px;
    color: ${({color})=>color};
    font-size: 14px;
    line-height: 20px;
`

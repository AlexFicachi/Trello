import React from 'react';
import styled from 'styled-components';
import {ColumnHeader} from './column/ColumnHeader';
import {ColumnMain} from './column/ColumnMain';
import {ColumnFoot} from './column/ColumnFoot';

export const Column = () => {
    return (
        <Wrapper>
            <ColumnHeader/>
            <ColumnMain/>
            <ColumnFoot/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-width: 272px;
    background: rgb(235,236,240);
    border-radius: 3px;
    display: inline-block;
    margin-right: 8px;
    padding: 5px;
    padding-left: 8px;
    color: #172b4d;
    font-size: 14px;
    line-height: 20px;
`

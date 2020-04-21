import React, {useContext} from 'react'
import styled from 'styled-components';
import {ColumnTitle} from './ColumnTitle';
import {EditColumnTitle} from './EditColumnTitle';
import {Context} from '../../Context';
import {ColumnIcon} from './ColumnIcon';

export const ColumnHeader = () => {
    let myContext = useContext(Context);

    let title = myContext.titleInput ? <EditColumnTitle/> : <ColumnTitle/>;

    return (
        <Wrapper>
            {title}
            <ColumnIcon/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 35px;
    display: grid;
    align-items: flex-start;
    grid-template-columns: 88% 12%;
    grid-template-rows: 1fr;
`

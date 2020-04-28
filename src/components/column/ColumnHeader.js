import React, {useContext} from 'react'
import styled from 'styled-components';
import {ColumnTitle} from './ColumnTitle';
import {EditColumnTitle} from './EditColumnTitle';
import {Context} from '../../Context';
import {ColumnIcon} from './ColumnIcon';

export const ColumnHeader = () => {
    const myContext = useContext(Context);

    const title = myContext.state.columnTitleInput ? <EditColumnTitle/> : <ColumnTitle/>;

    return (
        <Wrapper>
            {title}
            <ColumnIcon/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-basis: 35px;
    display: grid;
    align-items: flex-start;
    grid-template-columns: 88% 12%;
    grid-template-rows: 1fr;
`

import React, {useContext} from 'react'
import styled from 'styled-components';
import {ColumnTitle} from './ColumnTitle';
import {EditColumnTitle} from './EditColumnTitle';
import {Icon} from '../shared/Icon';
import {Context} from '../../Context';
import {IoMdClose} from 'react-icons/io';

export const ColumnHeader = () => {
    let myContext = useContext(Context);

    let title = myContext.titleInput ? <EditColumnTitle/> : <ColumnTitle/>;

    return (
        <Wrapper>
            {title}
            <Icon
                icon={<IoMdClose/>}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 35px;
    display: grid;
    grid-template-columns: 88% 12%;
    grid-template-rows: 1fr;
`

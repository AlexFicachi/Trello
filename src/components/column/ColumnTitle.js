import React, {useContext} from 'react'
import {Context} from '../../Context';
import styled from 'styled-components';

const ColumnTitle = () => {
    const myContext = useContext(Context);
    const { toggleEditColumnInput } = myContext.functions;
    const { columnIndex } = myContext;
    return (
        <Wrapper
            onClick={()=>toggleEditColumnInput(columnIndex)}
        >
            {myContext.state.name}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
    line-height: 1.5em;
    font-weight: 600;
    margin-left: 8px;
    margin-top: 4px;
    margin-bottom: 10px;
    white-space: normal;
    word-break: break-word;
    position: relative;
    z-index: 2;
`

export {ColumnTitle}

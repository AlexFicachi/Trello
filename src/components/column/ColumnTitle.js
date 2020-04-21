import React, {useContext} from 'react'
import {Context} from '../../Context';
import styled from 'styled-components';

const ColumnTitle = () => {

    let myContext = useContext(Context);

    return (
        <Wrapper>
            {myContext.name}
        </Wrapper>
    )
}

let Wrapper = styled.div`
    font-weight: 600;
    margin-left: 8px;
    margin-top: 4px;
`

export {ColumnTitle}

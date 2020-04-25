import React, {useContext} from 'react'
import styled from 'styled-components';
import {Context} from '../../Context';

export const RegularCardText = () => {

    const myContext = useContext(Context);

    return (
        <Wrapper>
            {myContext.state.name}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    white-space: normal;
    word-break: break-word;
`

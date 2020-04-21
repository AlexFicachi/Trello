import React, {useContext} from 'react'
import styled from 'styled-components';
import {Context} from '../../Context';

export const RegularCardText = () => {

    let myContext = useContext(Context);

    return (
        <Wrapper>
            {myContext.name}
        </Wrapper>
    )
}

const Wrapper = styled.div`

`

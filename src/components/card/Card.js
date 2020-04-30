import React, {useContext} from 'react'
import styled from 'styled-components';
import {RegularCard} from './RegularCard';
import {EditCard} from './editcard/EditCard';
import {Context} from '../../Context';

const Card = () => {
    const myContext = useContext(Context)
    return (
        <Wrapper>
            <RegularCard/>
            {myContext.state.editCardInput && <EditCard/>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
`

export {Card};

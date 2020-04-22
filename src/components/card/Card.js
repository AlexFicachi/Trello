import React, {useContext} from 'react'
import styled from 'styled-components';
import {RegularCard} from './RegularCard';
import {EditCard} from './EditCard';
import {Context} from '../../Context';

const Card = () => {

    let myContext = useContext(Context)
    return (
        <Wrapper>
            <RegularCard/>
            {myContext.state.editCardInput && <EditCard/>}
        </Wrapper>
    )
}

let Wrapper = styled.div`
    position: relative;
`

export {Card};

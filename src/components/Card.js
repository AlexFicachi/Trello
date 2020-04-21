import React from 'react'
import styled from 'styled-components';
import {RegularCard} from './card/RegularCard';

const Card = () => {
    return (
        <Wrapper>
            <RegularCard/>
        </Wrapper>
    )
}

let Wrapper = styled.div`

`

export {Card};

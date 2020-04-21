import React from 'react'
import styled from 'styled-components'

const Icon = ({icon}) => {
    return (
        <Wrapper>
            {icon}
        </Wrapper>
    )
}

let Wrapper = styled.div`
    justify-self: end;
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-items: center;
    color: rgb(107,119,139);
    & :hover{
        color: #172b4d;
    }
`

export {Icon};


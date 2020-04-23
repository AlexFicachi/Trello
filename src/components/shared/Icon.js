import React from 'react'
import styled from 'styled-components'

const Icon = ({icon}) => {
    return (
        <Wrapper>
            {icon}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
`

export {Icon};


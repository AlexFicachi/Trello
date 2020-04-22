import React, {useContext} from 'react'
import styled from 'styled-components'
import {Context} from '../../Context';

const Icon = ({icon}) => {
    const myContext = useContext(Context);
    const color = myContext.theme.color.columnTextLight;
    return (
        <Wrapper
            color={color}
        >
            {icon}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    justify-self: end;
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-items: center;
    color: ${({color})=>color};
`

export {Icon};


import React, {useContext} from 'react'
import styled from 'styled-components';
import {Input} from '../shared/Input'
import {Context} from '../../Context';

export const EditColumnTitle = () => {
    let myContext = useContext(Context);

    let value = myContext.name;
    
    return (
        <Wrapper>
            <Input
                value={value}
            />
        </Wrapper>
    )
}

let Wrapper = styled.div`

`

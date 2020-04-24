import React, {useContext} from 'react'
import styled from 'styled-components';
import {XIcon} from '../shared/XIcon';
import {Context} from '../../Context';

export const AddListCancel = () => {
    const myContext = useContext(Context)
    const {toggleInputDisplaying} = myContext.functions;
    return (
        <Wrapper
            onClick={toggleInputDisplaying}
        >
            <XIcon/>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`
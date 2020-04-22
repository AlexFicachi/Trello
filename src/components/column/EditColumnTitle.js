import React, {useContext} from 'react'
import styled from 'styled-components';
import {Input} from '../shared/Input'
import {Textarea} from '../shared/Textarea';
import {Context} from '../../Context';

export const EditColumnTitle = () => {
    let myContext = useContext(Context);

    let value = myContext.state.name;
    
    return (
        <Wrapper>
            <Textarea
                value={value}
                paddingBottom={'0px'}
                paddingTop={'2px'}
                paddingLeft={'6px'}
                paddingRight={'0px'}
                bold
            />
        </Wrapper>
    )
}

let Wrapper = styled.div`
    border: 2px solid rgb(0,121,191);
    border-radius: 3px;
    margin-bottom: 3px;
`

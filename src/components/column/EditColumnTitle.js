import React, {useContext} from 'react'
import styled from 'styled-components';
import {Textarea} from '../shared/Textarea';
import {Context} from '../../Context';

export const EditColumnTitle = () => {
    const myContext = useContext(Context);

    const value = myContext.state.name;
    
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

const Wrapper = styled.div`
    border: 2px solid rgb(0,121,191);
    border-radius: 3px;
    margin-bottom: 3px;
`

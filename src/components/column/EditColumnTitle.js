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
                myStyle={`
                    font-weight: 600;
                `}
                wrapperStyle={`
                    padding-bottom: 0px;
                    padding-top: 2px;
                    padding-left: 6px;
                    padding-right: 0px;
                `}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border: 2px solid rgb(0,121,191);
    border-radius: 3px;
    margin-bottom: 3px;
`

import React, {useContext} from 'react'
import styled from 'styled-components';
import {Textarea} from '../../shared/Textarea'
import {Context} from '../../../Context';

export const EditCardInput = ({bind}) => {
    const myContext = useContext(Context);
    const value = myContext.state.name;
    return (
        <Wrapper>
            <Textarea
                value={value}
                wrapperStyle={`
                    padding-left: 8px
                `}
                bind={bind}
            />
        </Wrapper>
    )
}



const Wrapper = styled.div`
    padding-bottom: 18px;
    background: white;
    border-radius: 3px;
    margin-bottom: 15px;
`
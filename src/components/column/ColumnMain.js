import React, {useContext} from 'react';
import {Context} from '../../Context';
import styled from 'styled-components';
import {Card} from '../card/Card';

export const ColumnMain = () => {
    const myContext = useContext(Context);
    const theme = myContext.theme
    const cards = myContext.state.cards.map(card=>{
        return (
            <Context.Provider
                value={{
                    state: card,
                    theme
                }}
                key={card.id}
            >
                <Card/>
            </Context.Provider>
        )
    })

    return (
        <Wrapper>
            {cards}
        </Wrapper>
    )
}

let Wrapper = styled.div`

`

import React, {useContext} from 'react';
import {Context} from '../../Context';
import styled from 'styled-components';
import {Card} from '../card/Card';

export const ColumnMain = () => {
    const myContext = useContext(Context);
    let cards = myContext.cards.map(card=>{
        return (
            <Context.Provider
                value={{
                    name: card.name,
                    id: card.id,
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

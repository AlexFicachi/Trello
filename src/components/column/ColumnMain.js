import React, {useContext} from 'react';
import {Context} from '../../Context';
import styled from 'styled-components';
import {Card} from '../card/Card';

export const ColumnMain = () => {
    const myContext = useContext(Context);
    const cards = myContext.state.cards.map((card,i)=>{
        return (
            <Context.Provider
                value={{
                    state: card,
                    theme: myContext.theme,
                    cardIndex: i,
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

const Wrapper = styled.div`

`

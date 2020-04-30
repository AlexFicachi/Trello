import React, {useContext} from 'react';
import styled from 'styled-components';
import {ColumnCards} from './ColumnCards';
import {Droppable} from 'react-beautiful-dnd';
import {Context} from '../../../Context';
import {ColumnFoot} from './ColumnFoot';
import {AddCardForm} from '../addcard/AddCardForm'

export const ColumnBody = () => {
    const myContext = useContext(Context);
    const { addCardInput } = myContext.state;
    const columnFoot = !addCardInput && <ColumnFoot/>
    const addCardForm = addCardInput && <AddCardForm/>
    return (
        <Droppable
            droppableId={myContext.state.id}
        >
            {(provided, snapshot)=>
                <React.Fragment>
                    <Wrapper
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >  
                        <Cards>
                            <ColumnCards/>
                        </Cards>
                            {provided.placeholder}
                        <Footer>
                            {addCardForm}
                            {columnFoot}
                        </Footer>   
                    </Wrapper>
                </React.Fragment>
            }
        </Droppable>
    )
};

const Wrapper = styled.div` 

    
`
const Footer = styled.div`
`
const Cards = styled.div`

`
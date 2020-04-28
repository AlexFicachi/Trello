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
            {(provided)=>
                <React.Fragment>
                    <Wrapper
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <Scroll>
                            <ColumnCards/>
                            {provided.placeholder}
                            {addCardForm}
                        </Scroll>
                    </Wrapper>
                        {columnFoot}
                </React.Fragment>
            }
        </Droppable>
    )
};

const Scroll = styled.div`
    
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    overflow-y: auto;
`
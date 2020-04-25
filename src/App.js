import React, {useState} from 'react';
import './App.css';
import {Header} from './components/Header';
import {Board} from './components/Board';
import {Context} from './Context';
import {v4} from 'uuid';
import {useDragnDrop} from './components/useDragnDrop';


function App() {
  /*  TODO
        Add inverse dataflow
  */
  const [state, setState] = useState(
    [
      {
        name: 'Column One super long loansdgnasdognasdglaksdjgalsdkfjasldfkjasldfkjasldkfjsad flong long',
        columnTitleInput: false,
        addCardInput: false,
        id: v4(),
        cards: [
          {
            name: 'card one',
            id: v4(),
            editCardInput: false,
          },
          {
            name: 'card two',
            id: v4(),
            editCardInput: false,
          }
        ],
      },
      {
        name: 'Column Two',
        columnTitleInput: false,
        addCardInput: false,
        id: v4(),
        cards: [
          {
            name: 'First card in column two',
            id: v4(),
            editCardInput: false,
          },
          {
            name: 'card two in column two',
            id: v4(),
            editCardInput: false,
          },
          {
            name: 'This is the third card of the second row, and we\'ll be displaying the input on this one',
            id: v4(),
            editCardInput: false,
          }
        ],
      },
    ],
  )
  const [onDragEnd] = useDragnDrop(state, setState);

  const [inputDisplaying, setInputDisplaying] = useState(false);

  const addList = (value) => {
    const slicedState = state.slice();
    slicedState.push({
      name: value,
      columnTitleInput: false,
      addCardInput: false,
      id: v4(),
      cards: [],
    });
    setState(slicedState)
  }
  const addCard = (card, columnIdx) => {
    let slicedState = state.slice();
    slicedState[columnIdx].cards.push({
      name: card,
      id: v4(),
      editCardInput: false,
    });
    setState(slicedState);
  }
  const deleteColumn = (idx) => {
    setState(state.filter((col,i)=> i !== idx))
  }
  const deleteCard = (cardIdx, columnIdx) => {
    const slicedState = state.slice();
    slicedState[columnIdx].cards = slicedState[columnIdx].cards.filter((card,i)=>i!==cardIdx);
    setState(slicedState)
  }
  const editCard = (value, columnIdx, cardIdx) => {
    const slicedState = state.slice();
    slicedState[columnIdx].cards[cardIdx].name = value;
    setState(slicedState);
    toggleEditCardInput(cardIdx, columnIdx)
  }
  const editList = (value, columnIdx) => {
    const slicedState = state.slice();
    slicedState[columnIdx].name = value;
    setState(slicedState);
    toggleEditColumnInput(columnIdx)
  }
  const toggleAddCardInput = (idx) => {
    const slicedState = state.slice();
    slicedState[idx].addCardInput = !slicedState[idx].addCardInput;
    setState(slicedState)
  }
  const toggleInputDisplaying = () => {
    setInputDisplaying(!inputDisplaying)
  }
  const toggleEditCardInput = (cardIdx, columnIdx) => {
    const slicedState = state.slice();
    slicedState[columnIdx].cards[cardIdx].editCardInput = 
    !slicedState[columnIdx].cards[cardIdx].editCardInput;
    setState(slicedState)
  }
  const toggleEditColumnInput = (columnIdx) => {
    const slicedState = state.slice();
    slicedState[columnIdx].columnTitleInput = !slicedState[columnIdx].columnTitleInput;
    setState(slicedState);
  }


  return (
    <div className="App">
      <Header/>
      <Context.Provider 
        value={{
          state: state,
          theme,
          inputDisplaying,
          functions: {
            onDragEnd,
            toggleAddCardInput,
            toggleInputDisplaying,
            toggleEditCardInput,
            toggleEditColumnInput,
            deleteColumn,
            deleteCard,
            addCard,
            addList,
            editCard,
            editList,
          }
        }}
      >
        <Board/>
      </Context.Provider>
    </div>
  );
}

const theme = {
  color: {
      columnText: '#2c3e50', // midnight blue
      columnTextLight: '#7f8c8d', // gray
      addButton: '#27ae60', // green
      addButtonHover: '#2ecc71', // light green
      deleteButton: '#c0392b', // red
      deleteButtonHover: '#e74c3c', // light red

  }
}

export {App};

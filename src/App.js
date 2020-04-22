import React, {useState} from 'react';
import './App.css';
import {Header} from './components/Header';
import {Board} from './components/Board';
import {Context} from './Context';
import {v4} from 'uuid';

function App() {
  /*  TODO
        Add react-beautiful-dnd
        Add inverse dataflow
  */
  const [state, setstate] = useState({
    columns:
    [
      {
        name: 'Column One super long loansdgnasdognasdglaksdjgalsdkfjasldfkjasldfkjasldkfjsad flong long',
        columnTitleInput: false,
        addCardInput: false,
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
        id: v4(),
      },
      {
        name: 'Column Two',
        columnTitleInput: false,
        addCardInput: true,
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
        id: v4(),
      },
    ],
  })

  const [inputDisplaying, setInputDisplaying] = useState(false);

  setTimeout(()=>{
    setInputDisplaying(true)
  },1000)

  return (
    <div className="App">
      <Header/>
      <Context.Provider 
        value={{
          state: state,
          theme,
          inputDisplaying,
        }}
      >
        <Board/>
      </Context.Provider>
    </div>
  );
}

let theme = {
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

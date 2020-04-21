import React, {useState} from 'react';
import './App.css';
import {Header} from './components/Header';
import {Board} from './components/Board';
import {Context} from './Context';
import {v4} from 'uuid';

function App() {

  const [columns, setColumns] = useState([
    {
      name: 'Column One',
      titleInput: false,
      cards: [
        {
          name: 'card one',
          id: v4(),
        },
        {
          name: 'card two',
          id: v4(),
        }
      ],
      id: v4(),
    },
    {
      name: 'Column Two',
      titleInput: true,
      cards: [
        {
          name: 'First card in column two',
          id: v4(),
        },
        {
          name: 'card two in column two',
          id: v4(),
        }
      ],
      id: v4(),
    },
  ])

  return (
    <div className="App">
      <Header/>
      <Context.Provider 
        value={{
          data: columns,
        }}
      >
        <Board/>
      </Context.Provider>
    </div>
  );
}

export {App};

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Analysis from './components/Analysis';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './css/board.css';
import {Container} from 'react-bulma-components';

function App() {
  return (
    <Container>
      <Board></Board>
      <Analysis></Analysis>
    </Container>
  );
}

export default App;

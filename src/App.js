import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Analysis from './components/Analysis';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './css/board.css';
import {Container, Columns, Button} from 'react-bulma-components';

function App() {

  function refresh (e) {
    console.log(e);
  }

  return (
    <Container>
      <Columns>
        <Columns.Column>
          <Button onClick={(e) => refresh(e)}>Refresh</Button> 
        </Columns.Column>
      </Columns>
      <Board></Board>
      <Analysis></Analysis>
    </Container>
  );
}

export default App;

import React from 'react';
import './App.css';

const count = 5;
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      row: 3,
      col: 3,
    };

    this.handleMove = this.handleMove.bind(this);
  };

  handleMove(direction) {
    const rowPosition =
      parseInt(this.state.row) + parseInt(direction[0]) < 1 ?
        1 : parseInt(this.state.row) + parseInt(direction[0]) > count ?
        count : parseInt(this.state.row) + parseInt(direction[0]);
    const colPosition =
      parseInt(this.state.col) + parseInt(direction[1]) < 1 ?
        1 : parseInt(this.state.col) + parseInt(direction[1]) > count ?
        count : parseInt(this.state.col) + parseInt(direction[1]);
    this.setState({row: rowPosition, col: colPosition});
  };

  render() {
    const rows = Array(count).fill(null).map((item, i) =>
      <Row key={`row-${i + 1}`} num={i + 1} row={this.state.row === i + 1 ? this.state.row : false} col={this.state.col} />
    );
    return (
      <>
      <section className='grid-container'>
        <h1>Robo-Trek</h1>
        {rows}
      </section>
      <Controls handleMove={this.handleMove} />
      </>
    );
  };
};

  function Row(props) {
    const cells = Array(count).fill(null).map((item, i) =>
      <Cell key={`row-${props.num}-cell-${i + 1}`} num={i + 1} row={props.row} col={props.row && props.col === i + 1 ? props.col : false} />
    );
    return (
      <div className={`row-${props.num}`}>
        {cells}
      </div>
    );
  };

    function Cell(props) {
      const robot = props.row && props.col ? true : false;
      return (
        <div className={`cell-${props.num}`}>
          {robot ? <span id="robot">Robot</span> : null}
        </div>
      );
    };

  function Controls(props) {
    return (
      <div className="controls">
        <button id="up" onClick={() => props.handleMove([-1, 0])}>Up</button>
        <button id="down" onClick={() => props.handleMove([1, 0])}>Down</button>
        <button id="left" onClick={() => props.handleMove([0, -1])}>Left</button>
        <button id="right" onClick={() => props.handleMove([0, 1])}>Right</button>
        <button id="forward">Accelerate</button>
      </div>
    );
  };

export default App;

import React from 'react';
import './App.css';

const count = 5;
class App extends React.Component {
  constructor(props) {
    super(props);

    //up/right is position, down/left is negative
    this.state = {
      row: 3,
      col: 3,
      direction: [0, 1],
    };

    this.handleMove = this.handleMove.bind(this);
    this.handleTurn = this.handleTurn.bind(this);
  };

  handleTurn(dir) {
    this.setState({direction: dir});
  };

  handleMove() {
    if (parseInt(this.state.direction[0]) !== 0) {
      const nextRow = parseInt(this.state.direction[0]) + parseInt(this.state.row);
      nextRow < 1 || nextRow > count ? this.bump() : this.setState({row: nextRow});
    } else {
      const nextCol = parseInt(this.state.direction[1]) + parseInt(this.state.col);
      nextCol < 1 || nextCol > count ? this.bump() : this.setState({col: nextCol});
    };
  };

    bump() {
      alert("You've hit a wall!");
    };

  render() {
    const rows = Array(count).fill(null).map((item, i) =>
      <Row
        key={`row-${i + 1}`}
        num={i + 1}
        row={this.state.row === i + 1 ? this.state.row : false}
        col={this.state.col}
      />
    );
    return (
      <>
      <section className='grid-container'>
        <h1>Robo-Trek</h1>
        {rows}
      </section>
      <Controls handleMove={this.handleMove} handleTurn={this.handleTurn} />
      </>
    );
  };
};

  function Row(props) {
    const cells = Array(count).fill(null).map((item, i) =>
      <Cell
        key={`row-${props.num}-cell-${i + 1}`}
        num={i + 1}
        row={props.row}
        col={props.row && props.col === i + 1 ? props.col : false}
      />
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
        <button type="button" id="north" onClick={() => props.handleTurn([-1, 0])}>North</button>
        <button type="button" id="south" onClick={() => props.handleTurn([1, 0])}>South</button>
        <button type="button" id="west" onClick={() => props.handleTurn([0, -1])}>West</button>
        <button type="button" id="east" onClick={() => props.handleTurn([0, 1])}>East</button>
        <button type="button" id="forward" onClick={() => props.handleMove()}>Accelerate</button>
      </div>
    );
  };

export default App;

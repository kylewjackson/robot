import React from 'react';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group';

const count = 5;
const cardinals = ['North', 'South', 'West', 'East'];
const coordinates = [[-1, 0], [1, 0], [0, -1], [0, 1]];
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      row: 3,
      col: 3,
      direction: [0, 1],
      active: 'east'
    };

    this.handleMove = this.handleMove.bind(this);
    this.handleTurn = this.handleTurn.bind(this);
  };

  handleTurn(dir) {
    const currentChange = coordinates.map((cord, i) => cord[0] === dir[0] && cord[1] === dir[1] ? i : -1);
    const currentDirection = cardinals.filter((card, i) => currentChange[i] > -1).join('').toLowerCase();
    this.setState({direction: dir, active: currentDirection});
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
        direction={this.state.direction}
        active={this.state.active}
      />
    );
    return (
      <>
      <section className='grid-container'>
        <h1>Robo-Trek</h1>
        {rows}
      </section>
      <Controls
        active={this.state.active}
        handleMove={this.handleMove}
        handleTurn={this.handleTurn}
      />
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
        direction={props.direction}
        active={props.active}
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
          <CSSTransitionGroup transitionName={`robot-${props.active}`} transitionEnterTimeout={200} transitionLeaveTimeout={200}>
            {robot ? <span id="robot"></span> : null}
          </CSSTransitionGroup>
        </div>
      );
    };

  function Controls(props) {
    const buttons = cardinals.map((dir, i) =>
      <button
        type="button"
        key={`${dir.toLowerCase()}-btn`}
        id={dir.toLowerCase()}
        className={props.active === dir.toLowerCase() ? 'active' : null}
        onClick={() => props.handleTurn(coordinates[i])}
      >
        {dir}
      </button>
    );
    return (
      <div className="controls">
        {buttons}
        <button type="button" id="forward" onClick={() => props.handleMove()}>Accelerate</button>
      </div>
    );
  };

export default App;

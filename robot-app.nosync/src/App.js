import React from 'react';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group';
import {Robo} from './Icons';

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
      active: 'east',
      prev: null,
      inMotion: false,
      turn: false,
      bump: false,
    };

    this.handleMove = this.handleMove.bind(this);
    this.handleTurn = this.handleTurn.bind(this);
  };

  componentDidMount() {
    document.addEventListener('keydown', e => {
      if (!this.state.inMotion) {
        if (e.keyCode === 32) {
          this.handleMove();
        } else if (e.keyCode === 37) {
          this.handleTurn([0, -1]);
        } else if (e.keyCode === 38) {
          this.handleTurn([-1, 0]);
        } else if (e.keyCode === 39) {
          this.handleTurn([0, 1]);
        } else if (e.keyCode === 40) {
          this.handleTurn([1, 0]);
        };
      };
    }, false);
  };

  handleTurn(dir) {
    const currentChange = coordinates.map((cord, i) => cord[0] === dir[0] && cord[1] === dir[1] ? i : -1);
    const prevDirection = this.state.active;
    const currentDirection = cardinals.filter((card, i) => currentChange[i] > -1).join('').toLowerCase();
    this.setState({direction: dir, active: currentDirection, prev: prevDirection, turn: true});
    setTimeout(() => {
      this.setState({turn: false});
    }, 500);
  };

  handleMove() {
    if (parseInt(this.state.direction[0]) !== 0) {
      const nextRow = parseInt(this.state.direction[0]) + parseInt(this.state.row);
      nextRow < 1 || nextRow > count ? this.bump() : this.setState({row: nextRow});
    } else {
      const nextCol = parseInt(this.state.direction[1]) + parseInt(this.state.col);
      nextCol < 1 || nextCol > count ? this.bump() : this.setState({col: nextCol});
    };
    this.setState({inMotion: true});
    setTimeout(() => {
        this.setState({inMotion: false});
    }, 1000);
  };

    bump() {
      this.setState({bump: true});
      setTimeout(() => {
        this.setState({bump: false});
      }, 1000);
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
        prev={this.state.prev}
        turn={this.state.turn}
        bump={this.state.bump}
        inMotion={this.state.inMotion}
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
        inMotion={this.state.inMotion}
        bump={this.state.bump}
        handleMove={this.handleMove}
        handleTurn={this.handleTurn}
      />
      <footer>
      <small>by <a href="https://www.kylejackson.dev" target="_blank" rel="noopener noreferrer">kyle jackson</a></small>
      </footer>
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
        prev={props.prev}
        turn={props.turn}
        bump={props.bump}
        inMotion={props.inMotion}
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
      const classArray = [props.active, `prev-${props.prev}`];
      if (props.bump) {
        classArray.push('bump');
      };
      if (props.turn) {
        classArray.push('turn');
      };
      if (props.inMotion) {
        classArray.push('zoom');
      };
      return (
        <div className={`cell-${props.num}`}>
          <CSSTransitionGroup transitionName={`robot-${props.active}`} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
            {robot ?
              <span id="robot" key="robot" className={classArray.join(' ')}>
                <Robo />
              </span> :
              null
            }
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
        disabled={props.inMotion ? true : null}
      >
        <span>{dir === 'North' ? 'N' : dir === 'South' ? 'S' : dir === 'East' ? 'E' : 'W'}</span>
      </button>
    );
    return (
      <div className="controls">
        <div className="directions">
          {buttons}
        </div>
        <button type="button" id="forward" onClick={() => props.handleMove()} disabled={props.inMotion ? true : null}>
          <span>{props.bump ? 'Oww!' : props.inMotion? 'Wee!' : 'GO!'}</span>
        </button>
      </div>
    );
  };

export default App;

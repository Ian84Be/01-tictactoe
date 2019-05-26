import React, { Component } from 'react';

class Board extends Component {
    render() { 
        return ( 
            <div>
                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
            </div>
        );
    }

    renderSquare(i) {
        return (
            <Square 
                onClick={() => this.props.onClick(i)}
                value={this.props.squares[i]}/>
        );
    }
}

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}
 
export default Board;
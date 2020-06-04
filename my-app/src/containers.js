import { connect } from 'react-redux';
import { Game, Board } from './components';
import { calculateWinner } from './utils';  
import { gameCreators } from './mutations';

/**
 * Game
 */
const mapStateToPropsForGame = (state, ownProps) => {

	const { history, stepNumber, xIsNext } = state.game;

	const current = history[stepNumber];
	const winner = calculateWinner(current.squares);

	let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
	}
	
	return { history, current, status };
}

const mapDispatchToPropsForGame = (dispatch, ownProps) => {
	return {
		jumpTo: step => {
      dispatch(gameCreators.jumpToPast(step));
    }
	};
};

export const GameContainer = connect(
	mapStateToPropsForGame,
	mapDispatchToPropsForGame
)(Game);

/**
 * Board
 */
const mapStateToPropsForBoard = (state, ownProps) => {
	const { history, stepNumber } = state.game;
	const { squares } = history[stepNumber];
	return { squares }
}
const mapDispatchToPropsForBoard = (dispatch, ownProps) => {
	return {
		handleClick: index => {
			dispatch(gameCreators.clickSquare(index));
		}
	};
};

export const BoardContainer = connect(
	mapStateToPropsForBoard,
	mapDispatchToPropsForBoard
)(Board);

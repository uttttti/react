import { ISquare } from './entity';

/**
 * 現在の盤面からゲームが終わったかどうかを判定
 * @param squares 現在の盤面
 */
export function calculateWinner(squares: ISquare[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/**
 * 表示するステータスを返す関数
 * @param winner 勝者の文字列（決着がついていないときは`null`）
 * @param xIsNext 次がxかどうかのフラグ
 */
export const getStatus = (winner: ISquare, xIsNext: boolean) => {
  if (winner) {
    return `Winner: ${winner}`;
  } else {
    const nextPlayer = xIsNext? 'X' : 'O';
    return `Next player: ${nextPlayer}`;
  }
}

/**
 * クリックイベント後の盤面の新しい配列を返す関数
 * @param squares 盤面の状態
 * @param xIsNext 次がxかどうか
 * @param i 何番目の要素が変更されたのか
 */
export const createNewSquares = (
  squares: ISquare[],
  xIsNext: boolean,
  i: number
) => 
  squares.map((square, index) => {
    if (i === index) {
      return xIsNext? 'X': 'O';
    }
    return square;
  })

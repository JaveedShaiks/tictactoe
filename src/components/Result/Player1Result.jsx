import React from 'react';
import { connect } from 'react-redux';

import { checkResult } from '../../actions/resultsAction.js';

function Player1Result(props) {
  const { board, players, result, checkResult, playerNames } = props;
  let maxGames = [0, 0, 0, 0, 0, 0];

  if (!(result.tie || result.win)) {
    checkResult(board);
  }

  return result.P1Count === 6 || result.P2Count === 6 ? null : (
    <div className="row">
      <div className="col-12 text-center">
        <div className="infoText">
          {result.win === null && !result.tie && players.turn === 'p1' ? (
            <span>Your Turn</span>
          ) : null}
          {result.tie ? (
            <span className="displayText font-20">DRAW</span>
          ) : null}
          {result.win === 'X' ? <span className="font-20">WINNER</span> : null}
        </div>
      </div>
      <div className="col-12 mt-3 mb-3">
        <div
          className={`${
            result.win === 'X' ? 'winnerWrap cardWrapper' : 'cardWrapper'
          }`}
        >
          <div className="highlightedText">Player 1</div>
          <div>{playerNames.player1}</div>
          <div className="font-40">{players.p1}</div>
        </div>
      </div>
      <div className="col-12 ">
        <div className="dotWrapper">
          <div className="row">
            {maxGames.map((game, index) => {
              return (
                <div className="col-2">
                  <div
                    className={
                      result.P1Count !== 0 && result.P1Count >= index + 1
                        ? 'dot dotHighlight'
                        : 'dot'
                    }
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(
  ({ board, players, result }) => ({ board, players, result }),
  (dispatch) => ({ checkResult: (board) => dispatch(checkResult(board)) })
)(Player1Result);

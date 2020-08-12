import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { replayGame } from '../../actions/resetActions';

import Square from './Square/Square.jsx';

function Board(props) {
  const { board, replayGame, result, playerNames, players } = props;

  return (
    <Fragment>
      <div id="board" className="mt-4 ">
        <div className="boxWrapper d-flex flex-wrap">
          {board.map((symbol, i) => (
            <Square key={i} index={i} symbol={symbol} />
          ))}

          {((result.P1Count !== 6 || result.P2Count !== 6) && result.win) ||
          result.tie ? (
            <div className="alertBox row align-items-center m-0">
              <div className=" col ">
                <p>Click Continue to replay game</p>{' '}
                <button
                  type="text"
                  onClick={() => replayGame()}
                  className="btn primaryBtn shadow-sm"
                >
                  Continue
                </button>
              </div>
            </div>
          ) : null}

          {result.P1Count === 6 || result.P2Count === 6 ? (
            <div className="resultBox row align-items-center m-0">
              <div className=" col ">
                <h4>Winner!</h4>
                <div className="winnerWrap cardWrapper">
                  <div className="highlightedText">Player 1</div>
                  <div>
                    {' '}
                    {result.P1Count === 6
                      ? playerNames.player1
                      : playerNames.player2}
                  </div>
                  <div className="font-40">
                    {' '}
                    {result.P1Count === 6 ? players.p1 : players.p2}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ board, result, players }) => ({
  board,
  result,
  players,
});

const mapDispatchToProps = (dispatch) => ({
  replayGame: () => dispatch(replayGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);

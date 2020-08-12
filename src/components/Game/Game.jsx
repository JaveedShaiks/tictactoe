import React from 'react';
import Player1Result from '../Result/Player1Result';
import Player2Result from '../Result/Player2Result';

import Board from '../Board/Board';
export const Game = ({ playerNames }) => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-3">
          <Player1Result playerNames={playerNames} />
        </div>
        <div className="col-6">
          <Board playerNames={playerNames} />
        </div>
        <div className="col-3">
          <Player2Result playerNames={playerNames} />
        </div>
      </div>
    </div>
  );
};

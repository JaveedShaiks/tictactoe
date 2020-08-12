import { X_WINS, O_WINS, TIE, REPLAY_GAME } from '../helpers/actionTypes';

const initialState = {
  win: null,
  tie: false,
  P1Count: 0,
  P2Count: 0,
};

export function resultReducer(state = initialState, action) {
  switch (action.type) {
    case X_WINS:
      return Object.assign({}, state, {
        win: 'X',
        tie: false,
        P1Count: state.P1Count + 1,
      });

    case O_WINS:
      return Object.assign({}, state, {
        win: 'O',
        tie: false,
        P2Count: state.P2Count + 1,
      });

    case TIE:
      return Object.assign({}, state, {
        win: null,
        tie: true,
      });
    case REPLAY_GAME:
      return Object.assign({}, state, {
        win: null,
        tie: false,
      });

    default:
      return state;
  }
}

import { SET_PATHNAME } from '../actions/types';

const initialState = '';

const pathname = (state = initialState, action) => {
  switch (action.type) {
    case SET_PATHNAME:
      return action.pathname;
    default:
      return state;
  }
};

export default pathname;

import { SET_PAGENAME } from '../actions/types';

const initialState = '';

const pageName = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGENAME:
      return action.pageName;
    default:
      return state;
  }
};

export default pageName;

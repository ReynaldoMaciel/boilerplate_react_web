import { UserState, SET_USER, REMOVE_TOKEN, UserActionTypes } from './types';

const initialState: UserState = {
  token: '',
  userId: '',
  refreshToken: '',
};

const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case SET_USER:
      return {
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case REMOVE_TOKEN:
      return {
        token: '',
      };
    default:
      return state;
  }
};

export default userReducer;

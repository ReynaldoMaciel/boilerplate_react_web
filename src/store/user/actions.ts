import { UserState, SET_USER, REMOVE_TOKEN, UserActionTypes } from './types';

// TypeScript infers that this function is returning SetTokenAction
export function setUser(payload: UserState): UserActionTypes {
  return {
    type: SET_USER,
    payload,
  };
}

// TypeScript infers that this function is returning RemoveTokenAction
export function removeToken(): UserActionTypes {
  return {
    type: REMOVE_TOKEN,
  };
}

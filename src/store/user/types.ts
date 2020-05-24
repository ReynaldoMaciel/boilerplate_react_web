// Type of Initial State
export interface UserState {
  token: string;
  refreshToken: string;
  userId: string;
}

// Type of action's type
export const SET_USER = 'SET_USER';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

interface SetUserAction {
  type: typeof SET_USER;
  payload: UserState;
}

interface RemoveTokenAction {
  type: typeof REMOVE_TOKEN;
}

export type UserActionTypes = SetUserAction | RemoveTokenAction;

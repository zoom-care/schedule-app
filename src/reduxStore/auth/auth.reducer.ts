import { Selector } from "react-redux";
import { AuthAction, AuthActionType } from "./auth.actions";

export type AuthState = {
  isAuthenticated: boolean;
};

export const defaultState: AuthState = {
  isAuthenticated: false,
};

export function authReducer(
  state = defaultState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionType.SETUP_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
      };
    default:
      return state;
  }
}

export const selectIsAuthenticated: Selector<
  ApplicationGlobalState,
  boolean
> = (state) => state.auth.isAuthenticated;

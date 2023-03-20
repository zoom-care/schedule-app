export enum AuthActionType {
  LOGIN_USER = "LOGIN_USER",
  LOGOUT_USER = "LOGOUT_USER",
  SETUP_AUTHENTICATION = "SETUP_AUTHENTICATION",
  AUTH_ERROR = "AUTH_ERROR",
  INIT_AUTH = "INIT_AUTH",
}

type SetupAuthDataPayload = {
  isAuthenticated: boolean;
};

export const onSetupAuthData = (payload: SetupAuthDataPayload) =>
  ({
    type: AuthActionType.SETUP_AUTHENTICATION,
    payload,
  } as const);

type LoginDataPayload = {
  email: string;
  password: string;
};

export const onLoginUser = (payload: LoginDataPayload) =>
  ({
    type: AuthActionType.LOGIN_USER,
    payload,
  } as const);

export const onLogoutUser = () =>
  ({
    type: AuthActionType.LOGOUT_USER,
  } as const);

export const onInitAuth = () =>
  ({
    type: AuthActionType.INIT_AUTH,
  } as const);

export type OnInitAuth = ReturnType<typeof onInitAuth>;
export type OnSetupAuthData = ReturnType<typeof onSetupAuthData>;
export type OnLoginUser = ReturnType<typeof onLoginUser>;
export type OnLogoutUser = ReturnType<typeof onLogoutUser>;

export type AuthAction =
  | OnLoginUser
  | OnLogoutUser
  | OnSetupAuthData
  | OnInitAuth;

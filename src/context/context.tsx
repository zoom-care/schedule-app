import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface IAuthContext {
  token: string;
  userName: string;
  setToken: Dispatch<SetStateAction<string>>;
  setAuthorizedUsername: Dispatch<SetStateAction<string>>;
}

const initialValues: IAuthContext = {
  token: "",
  userName: "",
  setToken: () => {},
  setAuthorizedUsername: () => {},
};

export const AuthContext = createContext(initialValues);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [token, setToken] = useState<string>("");
  const [authorizedUsername, setAuthorizedUsername] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{
        token: token,
        userName: authorizedUsername,
        setToken: setToken,
        setAuthorizedUsername: setAuthorizedUsername,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

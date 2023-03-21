import React, { useContext } from "react";

export const UserContext = React.createContext({
  user: null,
  setUser: (user: any) => {},
});

export function useUserContex() {
  const { user, setUser } = useContext(UserContext);
  return {
    user,
    setUser,
  };
}

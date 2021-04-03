import { createContext, useReducer } from "react";

// initial Context using createContext
export const UserContext = createContext();

// initial state global
const initialstate = {
  isLogin: false,
};

// reducer function
function reducerFunc(state, action) {
  const { type, payload } = action;

  //   check type
  switch (type) {
    case "LOGIN":
      return { isLogin: true };
    case "LOGOUT":
      return { isLogin: false };
    default:
      throw new Error();
  }
}

// create UserProvider for wrapper route
export const UserContextProvider = ({ children }) => {
  //   const dataGlobal = "ini data global";

  //   reducer for change value state
  const [state, dispatch] = useReducer(reducerFunc, initialstate);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

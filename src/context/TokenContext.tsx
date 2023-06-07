import React, { createContext, useReducer } from "react";

interface TokenContextType {
  token: string;
  dispatch: React.Dispatch<{ type: "SET_TOKEN"; payload: string }>;
}

const initialState = { token: "" };

const tokenReducer = (
  state: typeof initialState,
  action: { type: "SET_TOKEN"; payload: string }
) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export const TokenContext = createContext<TokenContextType>({
  token: "",
  dispatch: () => {},
});

export const TokenProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(tokenReducer, initialState);

  return (
    <TokenContext.Provider value={{ token: state.token, dispatch }}>
      {children}
    </TokenContext.Provider>
  );
};

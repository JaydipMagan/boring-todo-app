import { FC, PropsWithChildren, createContext, useContext } from "react";
import useAuth, {
  IAuthAction,
  IAuthState,
  initialState,
} from "../hooks/useAuth";

const AuthContext = createContext<IAuthState>(initialState);

const AuthDispatchContext = createContext<{
  dispatch: (action: IAuthAction) => void;
}>({ dispatch: () => {} });

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [auth, dispatch] = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      <AuthDispatchContext.Provider
        value={{ dispatch: (action: IAuthAction) => dispatch(action) }}
      >
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const useAuthDispatchContext = () => {
  return useContext(AuthDispatchContext).dispatch;
};

import { useEffect, Reducer, useReducer } from "react";

export type IAuthState = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
};

export type IAuthAction = {
  type: string;
  token: string;
};

export const initialState: IAuthState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const authReducer: Reducer<IAuthState, IAuthAction> = (prevState, action) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
    default:
      return prevState;
  }
};

const useAuth = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // handle firebase authentication
  }, []);

  return [state, dispatch] as const;
};

export default useAuth;

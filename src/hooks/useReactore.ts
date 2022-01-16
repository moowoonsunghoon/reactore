import { useContext } from "react";
import { ReactoreContext, ReactoreContextValue } from "../provider";

export const useReactore = <T = any>() => {
  const reactore = useContext<ReactoreContextValue<T>>(ReactoreContext);

  return reactore;
};

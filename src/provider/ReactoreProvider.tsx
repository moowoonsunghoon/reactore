import React, { useCallback, useState } from "react";
import { ReactoreClient } from "../core";

export type ReactoreContextValue<T> = ReactoreClient<T>;

export const ReactoreContext = React.createContext<ReactoreContextValue<any>>(
  new ReactoreClient({})
);

type ReactoreProps<T> = {
  reactore: ReactoreClient<T>;
};

export const ReactoreProvider: React.FC<ReactoreProps<any>> = ({
  children,
  reactore,
}) => {
  const [data, setData] = useState(reactore.data);
  const modify = useCallback(
    (modifyData: object) => {
      setData((prev: any) => {
        const result = {
          ...prev,
          ...modifyData,
        };
        reactore?.modify(result);
        return result;
      });
    },
    [reactore]
  );
  return (
    <ReactoreContext.Provider
      value={{
        data,
        modify,
      }}
    >
      {children}
    </ReactoreContext.Provider>
  );
};

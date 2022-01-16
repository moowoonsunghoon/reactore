import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useReactore } from "../useReactore";
import { ReactoreProvider } from "../../provider";
import { ReactoreClient } from "../../core";

type TestReactore = {
  test: string;
  test2?: number;
};

describe("useReactore hook", () => {
  const reactore = new ReactoreClient<TestReactore>({ test: "string" });
  const wrapper = ({ children }: any) => (
    <ReactoreProvider reactore={reactore}>{children}</ReactoreProvider>
  );
  it("should handle hook", () => {
    const { result } = renderHook(() => useReactore(), {
      wrapper,
    });

    expect(result.current.data).toEqual({ test: "string" });
  });

  it("should modify reactore data", () => {
    const { result } = renderHook(() => useReactore(), {
      wrapper,
    });

    act(() => {
      result.current.modify({ test: "test", test2: 1 });
    });

    expect(result.current.data).toEqual({ test: "test", test2: 1 });
  });
});

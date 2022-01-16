import { ReactoreClient } from "..";

describe("ReactoreClient", () => {
  const reactore = new ReactoreClient<{ test: string | null }>({
    test: "test",
  });

  it("should return reactore data", () => {
    expect(reactore.data?.test).toBe("test");
  });

  it("should modify reactore data", () => {
    reactore.modify({ test: "modifyTest" });
    expect(reactore.data?.test).toBe("modifyTest");
    reactore.modify({ test: null });
    expect(reactore.data?.test).toBeNull();
  });
});

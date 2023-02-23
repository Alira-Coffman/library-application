//generated from ChatGPT

import { renderHook } from "@testing-library/react-hooks";
import useFetch from "./useFetch";

describe("useFetch hook", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: "Test Data" }),
      })
    );
  });

  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  it("should return an object with data, isLoading, and error properties", () => {
    const { result } = renderHook(() => useFetch("https://example.com"));
    expect(result.current).toHaveProperty("data");
    expect(result.current).toHaveProperty("isLoading");
    expect(result.current).toHaveProperty("error");
  });

  it("should fetch data from the provided URL", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://example.com")
    );
    await waitForNextUpdate();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("https://example.com");
    expect(result.current.data).toEqual({ data: "Test Data" });
  });

  it("should set isLoading to false once data is fetched", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://example.com")
    );
    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
  });

  it("should handle fetch errors by setting the error property", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Fetch Error"))
    );
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://example.com")
    );
    await waitForNextUpdate();
    expect(result.current.error.message).toEqual("Fetch Error");
  });
});

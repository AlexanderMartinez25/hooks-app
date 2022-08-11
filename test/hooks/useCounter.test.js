import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en el useCounter", () => {
  test("debe de retornar los valores por defecto", () => {
    // evaluamos el hook con renderHook
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    // toEqual evaluación contra objeto, y esperamos que sea una función
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("debe de generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });

  test("debe de incrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    // ejecutar funcion y esperar resultado: "act"
    act(() => {
      // ejecutamos la funcion
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(103);
  });

  test("debe de decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      // ejecutamos la funcion
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(97);
  });

  test("debe de realizar el rest", () => {
    const { result } = renderHook(() => useCounter(100));
    const { reset, decrement } = result.current;

    act(() => {
      decrement();
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});

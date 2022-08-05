import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter width Hook: {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment(7)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(5)}>
        -1
      </button>
    </>
  );
};

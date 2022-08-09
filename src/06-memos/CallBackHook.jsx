import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  // sirve para memorizar funciones, en este caso memoriza "incrementFather"
  const incrementFather = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);

  // const incrementFather = () => {
  // setCounter(counter + 1);
  // };

  return (
    <>
      <h1>useCallBack Hook: {counter} </h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};

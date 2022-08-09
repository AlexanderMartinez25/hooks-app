import React from "react";
// y por eso se dispara solo una ves este componente (esat memorizado)
export const ShowIncrement = React.memo(({ increment }) => {
  console.log("me volví a generar :(");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});

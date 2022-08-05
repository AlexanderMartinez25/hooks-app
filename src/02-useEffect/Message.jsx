import { useEffect } from "react";

export const Message = () => {
  // cuando es llamado
  useEffect(() => {
    console.log("message mounted");

    // cuando deja de existir (removido)
    return () => {
      console.log("Message unMounted");
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};

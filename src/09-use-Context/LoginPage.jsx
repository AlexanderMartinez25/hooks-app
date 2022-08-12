import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  // nos traemos la información del contexto Usuario
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, name: "Juan", email: "juan@gmail.com" })
        }
      >
        Establecer usuario
      </button>
    </>
  );
};

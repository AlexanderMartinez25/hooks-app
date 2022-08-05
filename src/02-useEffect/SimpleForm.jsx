import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Alexander",
    email: "alexander@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      // propiedad computada
      [name]: value,
    });
  };

  // se dispara cada vez que hay cambios en los inputs
  // con [] se ejecta solo una vez al renderizar el componente
  useEffect(() => {
    // console.log("useEfect called!");
  }, []);

  useEffect(() => {
    // console.log("FomrState called!");
  }, [formState]);

  useEffect(() => {
    // console.log("email called!");
  }, [email]);

  return (
    <>
      <h1>Fomrulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="alexander@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "Alexander2" && <Message />}
    </>
  );
};

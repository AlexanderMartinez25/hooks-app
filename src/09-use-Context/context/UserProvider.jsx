import { useState } from "react";
import { UserContext } from "./UserContext";
// const user = {
//   id: 23,
//   name: "Alexander Martínex",
//   email: "alex@gmail.com",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{ hola: "Muundo", user }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

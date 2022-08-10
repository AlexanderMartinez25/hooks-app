import { UserContext } from "./UserContext";
const user = {
  id: 23,
  name: "Alexander Martínex",
  email: "alex@gmail.com",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "Muundo", user }}>
      {children}
    </UserContext.Provider>
  );
};

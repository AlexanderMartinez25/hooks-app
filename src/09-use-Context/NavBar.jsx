import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="About">About</Link>
      <Link to="login">Login</Link>
    </>
  );
};

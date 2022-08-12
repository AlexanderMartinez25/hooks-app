import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-use-Context/context/UserContext";
import { LoginPage } from "../../src/09-use-Context/LoginPage";

describe("Pruebas en <LoginPage/>", () => {
  test("debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("debe de llamar el SetUser cuando se hace click en el botón", () => {
    const setUsermock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUsermock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    // console.log(preTag.innerHTML);
    expect(setUsermock).toHaveBeenCalled();
    expect(setUsermock).toHaveBeenCalledWith({
      id: 123,
      name: "Juan",
      email: "juan@gmail.com",
    });
  });
});

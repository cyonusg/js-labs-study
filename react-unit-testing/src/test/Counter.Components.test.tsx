import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/counter"

test("increments counter", () => {
    render(<Counter />);
    //select the elements you want to interact with
    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("increment");
    fireEvent.click(incrementBtn);

    expect(counter).toHaveTextContent("1");
})

test ("decrement counter", () => {
    render(<Counter />)
    const counter = screen.getByTestId("counter");
    const decrementBtn = screen.getByTestId("decrement");
    fireEvent.click(decrementBtn);
    expect(counter).toHaveTextContent("0");
})
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe("Snapshot Testing", () => {
  test("App component snapshot testing", () => {
    const container = render(<App />);
    expect(container).toMatchSnapshot();
  })
})

describe("UI Testcases", () => {
  test("React First Test Case", () => {
    render(<App />);
    const text = screen.getByText(/First React Test Case/i);
    const title = screen.getByTitle("React logo");
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
  
  test("testing Input Box", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    let checkInputPlaceHolder = screen.getByPlaceholderText("Enter User Name");
    expect(checkInput).toBeInTheDocument();
    expect(checkInputPlaceHolder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name", "username");
    expect(checkInput).toHaveAttribute("id", "userId");
    expect(checkInput).toHaveAttribute("type", "text");
  });
})

describe("API Testcases", () => {
  test("API Test Case 1", () => {
    render(<App />);
    const text = screen.getByText(/First React Test Case/i);
    const title = screen.getByTitle("React logo");
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
  
  test("API Test Case 2", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    let checkInputPlaceHolder = screen.getByPlaceholderText("Enter User Name");
    expect(checkInput).toBeInTheDocument();
    expect(checkInputPlaceHolder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name", "username");
    expect(checkInput).toHaveAttribute("id", "userId");
    expect(checkInput).toHaveAttribute("type", "text");
  });

  describe("inner describe test group", () => {
    test("inner testcases", () => {
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      expect(checkInput).toBeInTheDocument();
    })
  })
})

// Testing for onChange event
describe("inputbox testing", () => {
  it("input box onchange event test", () => {
    render(<App/>)
    let input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "a" } });
    expect(input.value).toBe("a");
  })
})

// testing for onClick event
describe("Button Click Testing", () => {
  test("click event test cases", () => {
    render(<App/>);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(screen.getByText("Updated Data")).toBeInTheDocument();
  })
})



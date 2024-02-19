import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Standings from '../Components/Standings';

test("renders Standings component", () => {
    render(<Standings />);
    const standingsElement = screen.getByText(/Standings/i);
    expect(standingsElement).toBeInTheDocument();
  });
  
  


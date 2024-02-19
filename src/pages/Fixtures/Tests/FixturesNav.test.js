import React from "react";
import { render, screen } from "@testing-library/react";
import FixturesNav from '../Components/FixturesNav';


test("renders FixturesNav component", () => {
    render(<FixturesNav />);
    const fixturesNavElement = screen.getByText(/Lioness Fixtures/i)
    expect(fixturesNavElement).toBeInTheDocument();
  });
  
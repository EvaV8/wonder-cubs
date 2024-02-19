import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FixturesToggle from "../Components/FixturesToggle";

test("renders FixturesToggle component", () => {
    render(<FixturesToggle />);
    const fixturesButton = screen.getByText(/Fixtures/i);
    const standingsButton = screen.getByText(/Standings/i);
    expect(fixturesButton).toBeInTheDocument();
    expect(standingsButton).toBeInTheDocument();
  });
  

test("clicking the Fixtures button calls setActiveTab with 'fixtures'", () => {
const setActiveTab = jest.fn();
render(<FixturesToggle activeTab="standings" setActiveTab={setActiveTab} />);
const fixturesButtons = screen.getAllByText(/Fixtures/i);
const fixturesButton = fixturesButtons[0]; 
fireEvent.click(fixturesButton);
expect(setActiveTab).toHaveBeenCalledWith("fixtures");
});


test("clicking the Standings button calls setActiveTab with 'standings'", () => {
const setActiveTab = jest.fn();
render(<FixturesToggle activeTab="fixtures" setActiveTab={setActiveTab} />);
const standingsButtons = screen.getAllByText(/Standings/i);
const standingsButton = standingsButtons[0];
fireEvent.click(standingsButton);
expect(setActiveTab).toHaveBeenCalledWith("standings");
});
  

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FixturesHome from "../Components/FixturesHome";
import FixturesToggle from "../Components/FixturesToggle";

test("renders Fixtures component when activeTab is 'fixtures'", () => {
    render(<FixturesHome />);
    // Check if the FixturesToggle component is rendered
    const fixturesToggleElement = screen.getByTestId("fixturesToggle");
    expect(fixturesToggleElement).toBeInTheDocument();
  
    // Check if the Fixtures component is rendered
    const fixturesElement = screen.getByTestId("fixtures");
    expect(fixturesElement).toBeInTheDocument();
  
    // Check if the Standings component is not rendered
    const standingsElement = screen.queryByTestId("standings");
    expect(standingsElement).toBeNull();
  });
  
  test("clicking the Standings button calls setActiveTab with 'standings'", () => {
    const setActiveTab = jest.fn();
    render(<FixturesToggle activeTab="fixtures" setActiveTab={setActiveTab} />);
    const standingsButton = screen.getByText(/Standings/i);
    fireEvent.click(standingsButton);
    expect(setActiveTab).toHaveBeenCalledWith("standings");
  });
  
  
  
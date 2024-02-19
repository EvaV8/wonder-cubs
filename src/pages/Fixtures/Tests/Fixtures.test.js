import { render, screen } from '@testing-library/react';
import Fixtures from '../Components/Fixtures';

test('renders fixtures component', () => {
  render(<Fixtures />);
  const fixturesElement = screen.getByTestId('fixtures');
  expect(fixturesElement).toBeInTheDocument();
});

// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation links and default HealthPage', () => {
  // 1. Render the app
  render(<App />);

  // 2. Confirm mock Router wrapper appears
  expect(screen.getByTestId('router')).toBeInTheDocument();

  // 3. Confirm the four nav labels
  const navLinks = screen.getAllByTestId('navlink');
  const labels = navLinks.map(node => node.textContent);
  expect(labels).toEqual(
    expect.arrayContaining(['Health', 'Agriculture', 'Finance', 'General'])
  );

  // 4. NEW: Confirm at least one HealthPage heading
  const healthHeadings = screen.getAllByRole('heading', {
    name: /Healthcare Symptom Checker/i
  });
  expect(healthHeadings.length).toBeGreaterThanOrEqual(1);
});

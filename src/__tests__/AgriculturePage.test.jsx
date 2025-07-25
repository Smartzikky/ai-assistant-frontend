import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AgriculturePage from '../pages/AgriculturePage';

test('fetches and displays agriculture tips', async () => {
  // Mock the fetch call
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ answer: 'Use drip irrigation.' }),
    })
  );

  render(<AgriculturePage />);

  // Fill out the textarea
  fireEvent.change(
    screen.getByPlaceholderText(/soil type, crop, region/i),
    { target: { value: 'sandy soil, tomatoes, arid region' } }
  );

  // Click the submit button
  fireEvent.click(screen.getByText(/get tips/i));

  // Wait for the AI response to appear
  await waitFor(() =>
    expect(screen.getByText(/use drip irrigation/i)).toBeInTheDocument()
  );

  // Clean up
  global.fetch.mockRestore();
});

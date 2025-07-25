import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import GeneralPage from '../pages/GeneralPage';

test('fetches and displays general response', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ answer: 'Hello there!' }),
    })
  );

  render(<GeneralPage />);
  fireEvent.change(
    screen.getByPlaceholderText(/ask me anything/i),
    { target: { value: 'Hi' } }
  );
  fireEvent.click(screen.getByText(/send/i));

  await waitFor(() =>
    expect(screen.getByText(/hello there/i)).toBeInTheDocument()
  );

  global.fetch.mockRestore();
});

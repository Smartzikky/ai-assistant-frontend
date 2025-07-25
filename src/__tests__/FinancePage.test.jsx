import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FinancePage from '../pages/FinancePage';

test('fetches and displays finance plan', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ answer: 'Allocate 20% to savings.' }),
    })
  );

  render(<FinancePage />);
  fireEvent.change(
    screen.getByPlaceholderText(/income, expenses, goals/i),
    { target: { value: '5000, 2000, retirement' } }
  );
  fireEvent.click(screen.getByText(/get plan/i));

  await waitFor(() =>
    expect(screen.getByText(/allocate 20% to savings/i)).toBeInTheDocument()
  );

  global.fetch.mockRestore();
});

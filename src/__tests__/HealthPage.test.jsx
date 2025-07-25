// src/__tests__/HealthPage.test.jsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HealthPage from '../pages/HealthPage';

test('renders and submits health form', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ answer: 'This is a test response.' }),
    })
  );

  render(<HealthPage />);
  const textarea = screen.getByPlaceholderText(/describe your symptoms/i);
  fireEvent.change(textarea, { target: { value: 'cough and headache' } });

  const button = screen.getByText(/get advice/i);
  fireEvent.click(button);

  await waitFor(() =>
    expect(screen.getByText(/this is a test response/i)).toBeInTheDocument()
  );

  global.fetch.mockRestore();
});

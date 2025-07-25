import { useState } from 'react';
import Spinner from '../components/Spinner';
const API_URL = process.env.REACT_APP_API_URL || "https://ai-assistant-backend-3g6p.onrender.com";
export default function AgriculturePage() {
  const [context, setContext] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!context.trim()) {
    setError('Please enter soil type, crop, or region before submitting.');
    return;
  }
  setLoading(true);
  setError('');
  try {
    const response = await fetch(`${API_URL}/api/agriculture`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ context }),
    });
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    const data = await response.json();
    setAnswer(data.answer);
  } catch (err) {
    setError(err.message || 'Unexpected error occurred');
  } finally {
    setLoading(false);
  }
};

return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-4">
      <div className="max-w-xl w-full">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Agriculture Advisor
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Soil type, crop, region..."
            value={context}
            onChange={(e) => setContext(e.target.value)}
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Get Tips
          </button>
        </form>

        {loading && <Spinner />}
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        {answer && (
          <div className="mt-4 p-4 bg-white shadow rounded">
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        )}
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import Spinner from '../components/Spinner';
import toast from 'react-hot-toast';

const API_URL = process.env.REACT_APP_API_URL || "https://ai-assistant-backend-3g6p.onrender.com";

export default function HealthPage() {
  const { darkMode } = useDarkMode();
  const [symptoms, setSymptoms] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!symptoms.trim()) {
      toast.error('Please describe your symptoms before submitting.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_URL}/api/health`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptoms }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      setAnswer(data.answer);
      toast.success('Response received successfully!');
    } catch (err) {
      toast.error(err.message || 'Unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} flex flex-col items-center justify-start p-4`}>
      <div className="max-w-xl w-full animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary dark:text-yellow-300">
          Healthcare Symptom Checker
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
            placeholder="Describe your symptoms..."
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            rows={4}
          />
          <button
            type="submit"
           className="w-full py-2 px-4 rounded bg-orange-500 hover:bg-orange-600 text-white transition">
            Get Advice
          </button>
        </form>

        {loading && <Spinner />}
        {error && (
          <div className="mt-4 p-3 bg-red-100 dark:bg-red-400 text-red-700 dark:text-black rounded">
            {error}
          </div>
        )}
        {answer && (
          <div className="mt-4 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow rounded transition-colors duration-300 animate-fade-in">
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        )}
      </div>
    </div>
  );
}

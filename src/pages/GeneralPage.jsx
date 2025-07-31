import { useState, useEffect } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import Spinner from '../components/Spinner';
import toast from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

const API_URL = process.env.REACT_APP_API_URL || "https://ai-assistant-backend-3g6p.onrender.com";

export default function GeneralPage() {
  const { darkMode } = useDarkMode();
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error('Please enter a general query.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/general`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      if (!res.ok) throw new Error('Server responded with an error');
      const data = await res.json();
      setResponse(data.answer);
      toast.success('Answer generated!');
    } catch (err) {
      toast.error(err.message || 'Error occurred while fetching answer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen px-4 py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center" data-aos="fade-up">
          General Knowledge Assistant
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4" data-aos="fade-up">
          <textarea
            className={`w-full p-3 rounded border focus:outline-none focus:ring-2 ${darkMode ? 'bg-gray-800 text-white border-gray-600 focus:ring-yellow-300' : 'bg-white border-gray-300 focus:ring-blue-500'}`}
            placeholder="Ask any general question..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={4}
          />
          <button
            type="submit"
            className="w-full py-2 px-4 rounded bg-orange-500 hover:bg-orange-600 text-white transition"
          >
            Ask Me
          </button>
        </form>

        {loading && <Spinner />}

        {response && (
          <div className={`p-4 mt-4 rounded shadow ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`} data-aos="fade-in">
            <div dangerouslySetInnerHTML={{ __html: response }} />
          </div>
        )}
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { getBookById } from '../services/books';

export function useBookDetail({ id }) {
  const [book, setBook] = useState({ id });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBookById(id);
        setBook(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [id]);

  return { book, error, loading };
}

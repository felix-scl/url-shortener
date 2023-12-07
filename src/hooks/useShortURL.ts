import { useEffect, useState } from 'react';

interface ShortURL {
  originalUrl: string;
  shortId: string;
  clicks: number;
  createdAt: string;
}

export default function useShortURL() {
  const [shortURLs, setShortURLs] = useState<ShortURL[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getShortUrls = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8800/');
        const result: ShortURL[] = await response.json();
        setShortURLs(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getShortUrls();
  }, []);

  const addShortUrl = async (fullUrl: string) => {
    const response = await fetch('http://localhost:8800/shortenUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullUrl }),
    });

    const result = await response.json();

    if (result.ok) window.location.href = '/';
  };

  return { shortURLs, loading, addShortUrl };
}

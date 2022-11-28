import { useEffect, useState } from 'react';
import { getThumbs } from '../utils';

const useId = (url: string) => {
  const [data, setData] = useState<string[] | null>([]);
  const [loading, setLoading] = useState(!data);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (url === '' || !url) return;
    const thumbnailId = getThumbs(url);

    setData(thumbnailId);
    setLoading(false);
    setError(false);
  }, [url]);

  return { data, loading, error };
};

export default useId;

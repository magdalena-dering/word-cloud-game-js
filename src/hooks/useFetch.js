import { useEffect, useState } from 'react';
import axios from 'axios';
export const useFetch = (url) => {
  const [data, setWords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setWords(result.data);
    };
    fetchData().catch((e) => console.log(e));
  }, [url]);

  return { data };
};

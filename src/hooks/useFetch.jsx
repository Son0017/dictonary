import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const req = async () => {
    setIsPending(true);
    try {
      const request = await fetch(url);
      const responce = await request.json();
      setData(responce);
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      setError(err);
    }
  };

  useEffect(() => {
    setData(null);
    req();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;

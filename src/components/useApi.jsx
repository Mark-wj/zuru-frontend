import { useState } from "react";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, method = "GET", body = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
      });
      const data = await response.json();
      setLoading(false);
      if (!response.ok) throw new Error(data.detail || "Something went wrong");
      return data;
    } catch (err) {
      setLoading(false);
      setError(err.message);
      return null;
    }
  };

  return { fetchData, loading, error };
};

export default useApi;

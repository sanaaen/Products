import { useState, useEffect, useMemo } from 'react';

export const useProducts = (initialState = []) => {
  const [products, setProducts] = useState(initialState);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://app.getrecall.com/api/products')
      .then((res) => res.json())
      .then((result) => setProducts(result['products']))
      .catch(setError);
  }, []);

  const data = useMemo(() => products, [products]);
  return { data, error };
};

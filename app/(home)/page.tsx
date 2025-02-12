'use client';

import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
    const data = await res.json();
    setMovies(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : JSON.stringify(movies, null, 2)}
    </div>
  );
}

import { Metadata } from "next";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata: Metadata = {
  title: 'Home',
}

async function getMovies() {
  const res = await fetch(`${API_URL}`);
  return await res.json();
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} title={movie.title} id={movie.id} poster_path={movie.poster_path} />
      ))}
    </div>
  );
}

export const runtime = 'edge';
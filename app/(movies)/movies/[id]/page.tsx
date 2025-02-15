import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: {
    id: string;
  }
}

export default async function MovieDetail({ params: { id }}: IParams) {
  return <div>
    <Suspense fallback={<div>Loading movie info...</div>}>
      <MovieInfo id={id} />
    </Suspense>
    <Suspense fallback={<div>Loading videos...</div>}>
      <MovieVideos id={id} />
    </Suspense>
  </div>
}
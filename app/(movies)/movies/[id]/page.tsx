import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({ params: { id } }: { params: { id: string }  }) {
  return <div>
    <Suspense fallback={<div>Loading movie info...</div>}>
      <MovieInfo id={id} />
    </Suspense>
    <Suspense fallback={<div>Loading videos...</div>}>
      <MovieVideos id={id} />
    </Suspense>
  </div>
}
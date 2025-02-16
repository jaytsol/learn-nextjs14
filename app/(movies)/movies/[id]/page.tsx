import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";

type IParams = Promise<{
  id: string;
}>

export async function generateMetadata(props: { params: IParams }) {
  const params = await props.params;
  const movie = await getMovie(params.id);
  return {
    title: movie.title,
  }
}

export default async function MovieDetailPage(props: { params: IParams }) {
  const params = await props.params;
  return (
    <div>
        <Suspense fallback={<div>Loading movie info...</div>}>
          <MovieInfo id={params.id} />
        </Suspense>
    </div>
  )
}
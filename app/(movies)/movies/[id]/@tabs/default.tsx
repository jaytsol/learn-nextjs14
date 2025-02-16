import MovieTabs from "../../../../../components/movie-tabs";

export default async function Default({ params }: { params: { id: string } }){
  return <div>
    <MovieTabs id={params.id} />
  </div>;
}
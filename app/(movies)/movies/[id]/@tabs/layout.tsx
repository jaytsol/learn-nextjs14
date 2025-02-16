import MovieTabs from "../../../../../components/movie-tabs";

export default function Layout({ children, params }: { children: React.ReactNode, params: { id: string } }) {
    return (<div>
        <MovieTabs id={params.id} />
        {children}
    </div>)
}
import styles from "./movie-videos.module.css";
import { API_URL } from "../../../../../constants";

async function getVideos(id: string) {
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}
export default async function Videos({ params }: { params: { id: string } }) {
  const videos = await getVideos(params.id);
    return <div className={styles.container}>
      {videos.map(video => <iframe key={video.id} src={`https://youtube.com/embed/${video.key}`} title={video.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>)}
    </div>
}
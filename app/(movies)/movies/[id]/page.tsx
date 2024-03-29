import { URL } from "../../../(home)/page";

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${URL}/${id}/videos`);
  return response.json();
}

async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  const [movie, video] = await Promise.all([getMovie(id), getVideos(id)]);
  return (
    <>
      <h1>{movie.title}</h1>
    </>
  );
}

export default MovieDetail;

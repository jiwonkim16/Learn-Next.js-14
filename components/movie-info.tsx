import { URL } from "../app/contants";
import potato from "../components/movie-info.module.css";

export async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("something broke...");
  const response = await fetch(`${URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={potato.container}>
      <img src={movie.poster_path} className={potato.poster} />
      <div className={potato.info}>
        <h1 className={potato.title}>{movie.title}</h1>
        <h3>⭐️{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}

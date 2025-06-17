const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;
const TMDB_ACCOUNT_ID = process.env.TMDB_ACCOUNT_ID;
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export type Movie = {
  title: string;
  director: string;
  posterPath: string | null;
  releaseDate: string;
  id: number;
};

export async function getRecentMovie(): Promise<Movie | null> {
  if (!TMDB_ACCESS_TOKEN) {
    throw new Error("TMDB_ACCESS_TOKEN is not set");
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/account/${TMDB_ACCOUNT_ID}/favorite/movies?sort_by=created_at.desc`,
      {
        headers: {
          Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch rated movies");
    }

    const data = await response.json();
    const movie = data.results[0];

    if (!movie) return null;

    // Fetch additional movie details to get the director
    const detailsResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/credits`,
      {
        headers: {
          Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!detailsResponse.ok) {
      throw new Error("Failed to fetch movie credits");
    }

    const credits = await detailsResponse.json();
    const director =
      credits.crew.find((person: any) => person.job === "Director")?.name ||
      "Unknown Director";

    return {
      title: movie.title,
      director: director,
      posterPath: movie.poster_path
        ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
        : null,
      releaseDate: movie.release_date,
      id: movie.id,
    };
  } catch (error) {
    console.error("Error fetching movie:", error);
    return null;
  }
}

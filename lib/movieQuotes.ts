type MovieQuote = {
  quote: string;
  movie: string;
  character?: string;
  cached_at?: number;
};

// Cache duration: 2 days in milliseconds
const CACHE_DURATION = 2 * 24 * 60 * 60 * 1000;

export async function getMovieQuote(): Promise<MovieQuote> {
  try {
    const response = await fetch(
      "https://movie-quote-api.herokuapp.com/v1/quote/",
      {
        next: {
          revalidate: CACHE_DURATION,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movie quote");
    }

    const data = await response.json();

    return {
      quote: data.quote,
      movie: data.show || data.movie || "Unknown Movie",
      character: data.role || data.character,
      cached_at: Date.now(),
    };
  } catch (error) {
    // Fallback quote in case the API fails
    return {
      quote:
        "I'm respected because i mind my own business and i'd like to keep it that way.",
      movie: "The Blacklist",
      character: "Raymond Reddington",
    };
  }
}

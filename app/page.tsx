import { BookOpen, Music, Film, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

import { fetchSubstackArticles } from "@/lib/fetchSubstack"
import { getSpotifyTrack } from "@/lib/spotify"
import { getRecentMovie } from "@/lib/tmdb"
import { getMovieQuote } from "@/lib/movieQuotes"
import { getRecentProjects } from "@/lib/contentful"
import { getCurrentlyReading } from "@/lib/books"

type BaseConsumingItem = {
  type: "music" | "movie" | "book";
  icon: LucideIcon;
  title: string;
  author: string;
  status: string;
  url?: string;
};

type MusicItem = BaseConsumingItem & {
  type: "music";
  albumImage: string | undefined;
};

type MovieItem = BaseConsumingItem & {
  type: "movie";
  posterImage: string | undefined;
};

type BookItem = BaseConsumingItem & {
  type: "book";
  coverImage: string | undefined;
};

type ConsumingItem = MusicItem | MovieItem | BookItem;

async function getRecentWritings() {
  const articles = await fetchSubstackArticles()
  return articles.slice(0, 3).map(article => ({
    title: article.title,
    date: article.date,
    formattedDate: new Date(article.date).toISOString().slice(0, 10),
    excerpt: "", // Substack RSS feed doesn't include excerpts
    slug: article.guid || article.link
  }))
}

async function getCurrentlyConsuming() {
  const [track, movie, books] = await Promise.all([
    getSpotifyTrack(),
    getRecentMovie(),
    getCurrentlyReading()
  ]);
  return { track, movie, books };
}

export default async function Portfolio() {
  const [recentWritings, consumingData, movieQuote, projects] = await Promise.all([
    getRecentWritings(),
    getCurrentlyConsuming(),
    getMovieQuote(),
    getRecentProjects()
  ]);

  const { track: spotifyTrack, movie: recentMovie, books } = consumingData;

  const currentlyConsuming = (
    [
      spotifyTrack && ({
        type: "music" as const,
        icon: Music,
        title: spotifyTrack.title,
        author: spotifyTrack.artist,
        status: spotifyTrack.isCurrentlyPlaying ? "Currently playing" : "Recently played",
        albumImage: spotifyTrack.albumImage || undefined,
        url: spotifyTrack.url,
      } as MusicItem),
      recentMovie && ({
        type: "movie" as const,
        icon: Film,
        title: recentMovie.title,
        author: recentMovie.director,
        status: "Recently watched",
        posterImage: recentMovie.posterPath || undefined,
        url: recentMovie.url
      } as MovieItem),
      ...(books || []).map(book => ({
        type: "book" as const,
        icon: BookOpen,
        title: book.title,
        author: book.author,
        status: book.status,
        coverImage: book.coverImage || undefined,
        url: book.url
      } as BookItem))
    ] as const
  ).filter((item): item is ConsumingItem => item !== null);

  return (
    <div className="min-h-screen bg-misty-rose-50 dark:bg-smoky-black-950">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          <p className="text-md text-smoky-black-700 dark:text-misty-rose-300 max-w-2xl leading-relaxed">
            I'm someone who loves mixing different influences, genres and styles to create unique, innovative work. I
            enjoy pushing boundaries and exploring new ways to express myself without limitations.
          </p>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-misty-rose-200 dark:border-smoky-black-700">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold   text-smoky-black-900 dark:text-misty-rose-100">Recent Projects</h3>
            <Link
              href="/projects"
              className="text-smoky-black-600 dark:text-misty-rose-300 hover:text-shamock-green-700 dark:hover:text-shamock-green-300 hover:underline flex items-center gap-1 text-sm"
            >
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link key={index} href={`/projects/${project.slug}`} className="group block">
                <div className="space-y-4">
                  <div className="aspect-video relative overflow-hidden rounded-lg bg-misty-rose-100 dark:bg-smoky-black-800">
                    {project.images[0] && project.images[0].toLowerCase().match(/\.(mp4|webm|ogg|mov|avi)$/) ? (
                      <video
                        src={project.images[0]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loop
                        muted
                        autoPlay
                        playsInline
                        suppressHydrationWarning
                      />
                    ) : (
                      <Image
                        src={project.images[0] || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-smoky-black-900 dark:text-misty-rose-100 group-hover:text-smoky-black-700 dark:group-hover:text-misty-rose-200 transition-colors">
                      {project.title}
                    </h4>

                  </div>
                </div>

              </Link>
            ))}
          </div>
        </div>
      </section >

      {/* Recent Writing Section */}
      <section className="max-w-4xl mx-auto px-6 py-6 border-t border-misty-rose-200 dark:border-smoky-black-700" >
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-smoky-black-900 dark:text-misty-rose-100">Recent Writing</h3>
            <Link
              href="/writing"
              className="text-smoky-black-600 dark:text-misty-rose-300 hover:text-shamock-green-700 dark:hover:text-shamock-green-300 hover:underline flex items-center gap-1 text-sm"
            >
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="space-y-3">
            {recentWritings.map((post, index) => (
              <div key={index} className="flex items-start gap-6">
                <time className="text-sm text-smoky-black-500 dark:text-misty-rose-400 font-mono min-w-[80px]">
                  {post.formattedDate}
                </time>
                <Link href={`${post.slug}`} className="block group">
                  <h4 className="font-semibold text-smoky-black-900 dark:text-misty-rose-100 group-hover:text-shamock-green-700 dark:group-hover:text-shamock-green-300 transition-colors">
                    {post.title}
                  </h4>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Currently Consuming Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-misty-rose-200 dark:border-smoky-black-700" >
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-smoky-black-900 dark:text-misty-rose-100">Currently Consuming</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {currentlyConsuming.map((item, index) => {
              if (!item) return null;
              const image =
                item.type === "music" ? item.albumImage :
                  item.type === "movie" ? item.posterImage :
                    item.type === "book" ? item.coverImage :
                      undefined;

              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-misty-rose-100 dark:hover:bg-smoky-black-800/50 transition-colors"
                >
                  {image ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                      <img
                        src={image}
                        alt={item.title}
                        className="w-12 h-12 rounded shadow object-cover"
                      />
                    </a>
                  ) : (
                    <div className="p-2 bg-smoky-black-50 dark:bg-misty-rose-900/20 rounded-lg">
                      <item.icon className="w-5 h-5 text-smoky-black-500 dark:text-misty-rose-400" />
                    </div>
                  )}
                  <div className="space-y-1">
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-medium text-smoky-black-900 dark:text-misty-rose-100 hover:underline">
                        {item.title}
                      </a>
                    ) : (
                      <h4 className="font-medium text-smoky-black-900 dark:text-misty-rose-100">{item.title}</h4>
                    )}
                    <p className="text-sm text-smoky-black-700 dark:text-misty-rose-300">{item.author}</p>
                    <p className="text-xs text-smoky-black-500 dark:text-misty-rose-400">{item.status}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="border-t border-misty-rose-200 dark:border-smoky-black-700 py-12" >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <p className="text-smoky-black-700 dark:text-misty-rose-300 italic">
              "{movieQuote.quote}"
            </p>
            <div className="text-sm text-smoky-black-500 dark:text-misty-rose-400 mt-2">
              <p>— {movieQuote.character ? `${movieQuote.character}, ` : ''}{movieQuote.movie}</p>
            </div>
          </div>
        </div>
      </footer >
    </div >
  )
}

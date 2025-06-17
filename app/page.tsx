import { BookOpen, Music, Film, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

import { fetchSubstackArticles } from "@/lib/fetchSubstack"
import { getSpotifyTrack } from "@/lib/spotify"
import { getRecentMovie } from "@/lib/tmdb"
import { getMovieQuote } from "@/lib/movieQuotes"

async function getRecentWritings() {
  const articles = await fetchSubstackArticles()
  return articles.slice(0, 3).map(article => ({
    title: article.title,
    date: article.date,
    excerpt: "", // Substack RSS feed doesn't include excerpts
    slug: article.guid || article.link
  }))
}

async function getCurrentlyConsuming() {
  const [track, movie] = await Promise.all([
    getSpotifyTrack(),
    getRecentMovie()
  ]);
  return { track, movie };
}

const recentProjects = [
  {
    title: "Stunner Rave ",
    description: "Full-stack Next.js application with Stripe integration",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "JavaScript", "Paystack", "Tailwind"],
    slug: "stunner-rave",
  },
  {
    title: "Task Management App",
    description: "React-based productivity tool with real-time collaboration",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "Socket.io"],
    slug: "task-management-app",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Vue.js", "API Integration", "Charts"],
    slug: "weather-dashboard",
  },
]

export default async function Portfolio() {
  const [recentWritings, consumingData, movieQuote] = await Promise.all([
    getRecentWritings(),
    getCurrentlyConsuming(),
    getMovieQuote()
  ]);

  const { track: spotifyTrack, movie: recentMovie } = consumingData;

  const currentlyConsuming = [
    spotifyTrack && {
      type: "music",
      icon: Music,
      title: spotifyTrack.title,
      author: spotifyTrack.artist,
      status: spotifyTrack.isCurrentlyPlaying ? "Currently playing" : "Recently played",
      albumImage: spotifyTrack.albumImage,
      url: spotifyTrack.url,
    },
    recentMovie && {
      type: "movie",
      icon: Film,
      title: recentMovie.title,
      author: recentMovie.director,
      status: "Recently watched",
      posterImage: recentMovie.posterPath,
      releaseDate: recentMovie.releaseDate,
    },
    {
      type: "book",
      icon: BookOpen,
      title: "Atomic Habits",
      author: "James Clear",
      status: "Reading",
    },
    {
      type: "book",
      icon: BookOpen,
      title: "The Design of Everyday Things",
      author: "Don Norman",
      status: "Next up",
    },
  ].filter(Boolean)

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed italic">
            I'm someone who loves mixing different influences, genres and styles to create unique, innovative work. I
            enjoy pushing boundaries and exploring new ways to express myself without limitations.
          </p>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Recent Projects</h3>
            <Link
              href="/projects"
              className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:underline flex items-center gap-1 text-sm"
            >
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => (
              <Link key={index} href={`/projects/${project.slug}`} className="group block">
                <div className="space-y-4">
                  <div className="aspect-video relative overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 2 && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                          +{project.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Writing Section */}
      <section className="max-w-4xl mx-auto px-6   py-6 border-t border-gray-100 dark:border-gray-800">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Recent Writing</h3>
            <Link
              href="/writing"
              className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:underline flex items-center gap-1 text-sm"
            >
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="space-y-3">
            {recentWritings.map((post, index) => (
              <div key={index} className="flex items-start gap-6">
                <time className="text-sm text-gray-500 dark:text-gray-400 font-mono min-w-[80px]">
                  {new Date(post.date).toISOString().slice(0, 10)}
                </time>
                <Link href={`${post.slug}`} className="block">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-400 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
                    {post.title}
                  </h4>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Currently Consuming Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Currently Consuming</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {currentlyConsuming.map((item, index) => {
              if (!item) return null;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                >
                  {(item.type === "music" && item.albumImage) || (item.type === "movie" && typeof item.posterImage === "string") ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                      <img
                        src={item.type === "music" ? item.albumImage : item.posterImage || ""}
                        alt={item.title}
                        className="w-12 h-12 rounded shadow object-cover"
                      />
                    </a>
                  ) : (
                    <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <item.icon className="w-5 h-5 text-red-500 dark:text-red-400" />
                    </div>
                  )}
                  <div className="space-y-1">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.author}</p>
                    <p className="text-xs text-red-500 dark:text-red-400">{item.status}</p>
                    {/* {item.type === "movie" && item.releaseDate && (
                      <p className="text-xs text-gray-500">({new Date(item.releaseDate).getFullYear()})</p>
                    )} */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 italic">
              "{movieQuote.quote}"
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              <p>— {movieQuote.character ? `${movieQuote.character}, ` : ''}{movieQuote.movie}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

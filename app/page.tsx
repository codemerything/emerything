import { BookOpen, Music, Film, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const recentWritings = [
  {
    title: "The Art of Minimal Design",
    date: "December 3, 2024",
    excerpt: "A self-guaranteeing promise does not require you to trust anyone. You can verify it yourself.",
    slug: "art-of-minimal-design",
  },
  {
    title: "Building Scalable React Applications",
    date: "November 28, 2024",
    excerpt: "Best practices for structuring large React codebases for maintainability and performance.",
    slug: "building-scalable-react-applications",
  },
  {
    title: "The Future of Web Development",
    date: "November 15, 2024",
    excerpt: "Exploring emerging technologies and their potential impact on how we build for the web.",
    slug: "future-of-web-development",
  },
]

const recentProjects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack Next.js application with Stripe integration",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "TypeScript", "Stripe"],
    slug: "ecommerce-platform",
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

const currentlyConsuming = [
  {
    type: "book",
    icon: BookOpen,
    title: "Atomic Habits",
    author: "James Clear",
    status: "Reading",
  },
  {
    type: "music",
    icon: Music,
    title: "Blonde",
    author: "Frank Ocean",
    status: "On repeat",
  },
  {
    type: "movie",
    icon: Film,
    title: "Dune: Part Two",
    author: "Denis Villeneuve",
    status: "Recently watched",
  },
  {
    type: "book",
    icon: BookOpen,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    status: "Next up",
  },
]

export default function Portfolio() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            I'm someone who loves mixing different influences, genres and styles to create unique, innovative work. I
            enjoy pushing boundaries and exploring new ways to express myself without limitations.
          </p>
        </div>
      </section>

      {/* Recent Writing Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Recent Writing</h3>
            <Link
              href="/writing"
              className="text-red-500 dark:text-red-400 hover:underline flex items-center gap-1 text-sm"
            >
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="space-y-6">
            {recentWritings.map((post, index) => (
              <article key={index} className="group">
                <Link href={`/writing/${post.slug}`} className="block">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
                      {post.title}
                    </h4>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{post.date}</div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{post.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Recent Projects</h3>
            <Link
              href="/projects"
              className="text-red-500 dark:text-red-400 hover:underline flex items-center gap-1 text-sm"
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

      {/* Currently Consuming Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Currently Consuming</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {currentlyConsuming.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
              >
                <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <item.icon className="w-5 h-5 text-red-500 dark:text-red-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.author}</p>
                  <p className="text-xs text-red-500 dark:text-red-400">{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 italic">
              "The way I see it, if you want the rainbow, you gotta put up with the rain."
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">— Dolly Parton</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

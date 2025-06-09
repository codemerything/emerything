import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack Next.js application with Stripe integration and modern UI components",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    github: "#",
    live: "#",
    year: "2024",
  },
  {
    title: "Task Management App",
    description: "React-based productivity tool with real-time collaboration and team features",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
    live: "#",
    year: "2024",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts and interactive charts",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Vue.js", "API Integration", "Charts.js"],
    github: "#",
    live: "#",
    year: "2023",
  },
  {
    title: "Portfolio Website",
    description: "Minimal portfolio design with dark mode and responsive layout",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
    year: "2023",
  },
  {
    title: "Blog Platform",
    description: "Custom CMS with markdown support and SEO optimization",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Gatsby", "GraphQL", "Netlify CMS"],
    github: "#",
    live: "#",
    year: "2023",
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application built with React Native",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React Native", "Expo", "Firebase"],
    github: "#",
    live: "#",
    year: "2022",
  },
]

export default function Projects() {
  return (
    <div>
      {/* Projects Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Projects</h1>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              A collection of things I've built over the years. From web applications to mobile apps, each project
              represents a learning journey and exploration of different technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
              >
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-4">{project.year}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 p-0"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 p-0"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

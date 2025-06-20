import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getProjects } from "@/lib/contentful"

export const revalidate = 3600 // Revalidate every hour

export default async function Projects() {
  const projects = await getProjects()

  return (
    <div className="min-h-screen bg-misty-rose-50 dark:bg-smoky-black-950">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-xl font-bold text-smoky-black-900 dark:text-misty-rose-100">Projects</h1>
            <p className="text-smoky-black-700 dark:text-misty-rose-300 leading-relaxed max-w-2xl">
              A collection of things I've built over the years. From web applications to mobile apps, each project
              represents a learning journey and exploration of different technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow border-misty-rose-200 dark:border-smoky-black-700 bg-misty-rose-50 dark:bg-smoky-black-950">
                <CardContent className="p-0">
                  <div className="p-5 space-y-4">
                    <div className="flex justify-between items-start">
                      <Link href={`/projects/${project.slug}`} className="block flex-1">
                        <div className="space-y-2">
                          <h3 className="font-semibold text-smoky-black-900 dark:text-misty-rose-100 group-hover:text-shamock-green-700 dark:group-hover:text-shamock-green-300 transition-colors">{project.title}</h3>
                          <p className="text-sm text-smoky-black-700 dark:text-misty-rose-300 font-medium">{project.subtitle}</p>
                        </div>
                      </Link>
                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-smoky-black-700 hover:text-shamock-green-700 dark:text-misty-rose-300 dark:hover:text-shamock-green-300 -mt-1 -mr-2 hover:bg-misty-rose-100 dark:hover:bg-smoky-black-800"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-misty-rose-100 dark:bg-smoky-black-800 text-smoky-black-700 dark:text-misty-rose-300"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-misty-rose-100 dark:bg-smoky-black-800 text-smoky-black-700 dark:text-misty-rose-300"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
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

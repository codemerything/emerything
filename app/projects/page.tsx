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
                  {/* <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div> */}
                  <div className="p-6 space-y-4">
                    <Link href={`/projects/${project.slug}`} className="block">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-smoky-black-900 dark:text-misty-rose-100 group-hover:text-shamock-green-700 dark:group-hover:text-shamock-green-300 transition-colors">{project.title}</h3>
                        <p className="text-sm text-smoky-black-700 dark:text-misty-rose-300 font-medium">{project.subtitle}</p>
                      </div>
                    </Link>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-misty-rose-100 dark:bg-smoky-black-800 text-smoky-black-700 dark:text-misty-rose-300"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                    {/* {project.reviewAuthor && (
                      <div className="border-t pt-4 mt-4">
                        <blockquote className="text-sm italic text-gray-600 dark:text-gray-400">
                          <footer className="mt-2">
                            <strong className="text-gray-900 dark:text-gray-100">{project.reviewAuthor}</strong>
                            {project.reviewRole && (
                              <>
                                <span className="mx-1">·</span>
                                <span>{project.reviewRole}</span>
                              </>
                            )}
                            {project.reviewCompany && (
                              <>
                                <span className="mx-1">·</span>
                                <span>{project.reviewCompany}</span>
                              </>
                            )}
                          </footer>
                        </blockquote>
                      </div>
                    )} */}
                    {project.liveUrl && (
                      <div className="flex items-center gap-2 pt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-smoky-black-700 hover:text-shamock-green-700 dark:text-misty-rose-300 dark:hover:text-shamock-green-300 p-0"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live
                          </a>
                        </Button>
                      </div>
                    )}
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

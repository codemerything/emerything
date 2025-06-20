import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar, Clock, Users } from "lucide-react"
import Link from "next/link"
import { ProjectCarousel } from "@/components/project-carousel"
import { TechStack } from "@/components/tech-stack"
import { CustomerReview } from "@/components/customer-review"
import { notFound } from "next/navigation"
import { getProjectBySlug } from "@/lib/contentful"

interface ProjectPageProps {
    params: { slug: string }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = params
    const project = await getProjectBySlug(slug)

    if (!project) {
        notFound()
    }

    // Create a review object if any review data exists
    const hasReviewData = project.reviewAuthor || project.reviewRole || project.reviewCompany || (project.reviewMessages && project.reviewMessages.length > 0);

    const review = hasReviewData ? {
        id: "1",
        author: project.reviewAuthor || "Anonymous",
        role: project.reviewRole || "",
        company: project.reviewCompany || "",
        messages: project.reviewMessages || [
            {
                text: "The project exceeded our expectations!",
                timestamp: "2:30 PM",
                isClient: false,
            }
        ]
    } : undefined;

    // Debug log for final review object
    console.log('Has review data:', hasReviewData);
    console.log('Final Review Object:', review);

    return (
        <div className="min-h-screen bg-misty-rose-50 dark:bg-smoky-black-950">
            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="space-y-12">
                    {/* Header */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm text-smoky-black-500 dark:text-misty-rose-400">
                            <Link href="/projects" className="hover:text-shamock-green-700 dark:hover:text-shamock-green-300 transition-colors">
                                Projects
                            </Link>
                            <span>/</span>
                            <span>{project.title}</span>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-xl font-semibold text-smoky-black-900 dark:text-misty-rose-100">{project.title}</h1>
                            <p className="text-md text-smoky-black-700 dark:text-misty-rose-300">{project.subtitle}</p>
                        </div>
                        {project.stats && (
                            <div className="flex flex-wrap items-center gap-6 text-sm text-smoky-black-500 dark:text-misty-rose-400">
                                {project.stats.launched && (
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>Launched {project.stats.launched}</span>
                                    </div>
                                )}
                                {project.stats.duration && (
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>{project.stats.duration}</span>
                                    </div>
                                )}
                                {project.stats.team && (
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4" />
                                        <span>{project.stats.team}</span>
                                    </div>
                                )}
                            </div>
                        )}
                        {(project.links?.live || project.links?.github) && (
                            <div className="flex items-center gap-4">
                                {project.links.live && (
                                    <Button asChild className="bg-misty-rose-200 hover:bg-misty-rose-300 text-smoky-black-900">
                                        <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            View Live
                                        </Link>
                                    </Button>
                                )}
                                {project.links.github && (
                                    <Button variant="outline" asChild className="border-misty-rose-200 text-smoky-black-700 hover:text-smoky-black-900 dark:text-misty-rose-300 dark:hover:text-misty-rose-100">
                                        <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-4 h-4 mr-2" />
                                            View Code
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Project Screenshots Carousel */}
                    {project.images && project.images.length > 0 && (
                        <section className="space-y-6">
                            <h2 className="text-xl font-semibold text-smoky-black-900 dark:text-misty-rose-100">Preview</h2>
                            <ProjectCarousel images={project.images} projectTitle={project.title} />
                        </section>
                    )}

                    {/* Technology Stack */}
                    {project.technologies && project.technologies.length > 0 && (
                        <section className="space-y-6">
                            <h2 className="text-xl font-semibold text-smoky-black-900 dark:text-misty-rose-100">Technology Stack</h2>
                            <TechStack technologies={project.technologies} />
                        </section>
                    )}

                    {/* Project Description */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-semibold text-smoky-black-900 dark:text-misty-rose-100">About This Project</h2>
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            {project.description.split("\n\n").map((paragraph, index) => (
                                <p key={index} className="text-smoky-black-700 dark:text-misty-rose-300 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </section>

                    {/* Customer Review */}
                    {review && (
                        <section className="space-y-6">
                            <h2 className="text-xl font-semibold text-smoky-black-900 dark:text-misty-rose-100">Client Feedback</h2>
                            <CustomerReview review={review} />
                        </section>
                    )}

                    {/* Navigation */}
                    <div className="pt-8 border-t border-misty-rose-200 dark:border-smoky-black-700">
                        <Link href="/projects" className="text-smoky-black-500 dark:text-misty-rose-300 hover:text-shamock-green-700 dark:hover:text-shamock-green-300 hover:underline flex items-center gap-2">
                            ← Back to Projects
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

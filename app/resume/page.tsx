import { Download, Mail, Github, Linkedin, User, Briefcase, Code2, FolderGit2, PenTool, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ResumePage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Download Button */}

            {/* Resume Content */}
            <div className="space-y-6">
                <div className="space-y-1">
                    <div className="flex items-center justify-between">
                        <h1 className="text-4xl font-bold">Emmanuel Edem (Emery)</h1>
                        <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-smoky-black-700 hover:text-shamock-green-700 dark:text-misty-rose-300 dark:hover:text-shamock-green-300 hover:bg-misty-rose-100 dark:hover:bg-smoky-black-800 border border-smoky-black-700 dark:border-smoky-black-800"
                        >
                            <a href="/E EDEM.pdf" download className="inline-flex items-center">
                                <Download className="mr-2 h-4 w-4" />
                                Download Resume
                            </a>
                        </Button>
                    </div>
                    <h2 className="text-xl font-semibold">Design Engineer</h2>
                    <div className="flex flex-wrap gap-4 text-sm mt-3">
                        <a href="mailto:emerything@yahoo.com" className=" dark:text-misty-rose-400 hover:underline hover:text-shamock-green-700 dark:hover:text-shamock-green-300 underline inline-flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            emerything@yahoo.com
                        </a>
                        <a href="https://linkedin.com/in/mmnldm" target="_blank" rel="noopener noreferrer" className=" dark:text-misty-rose-400 hover:underline hover:text-shamock-green-700 dark:hover:text-shamock-green-300 underline inline-flex items-center gap-1">
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                        </a>
                        <a href="https://github.com/codemerything" target="_blank" rel="noopener noreferrer" className=" dark:text-misty-rose-400 hover:underline hover:text-shamock-green-700 dark:hover:text-shamock-green-300 underline inline-flex items-center gap-1">
                            <Github className="h-4 w-4" />
                            GitHub
                        </a>
                    </div>
                </div>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Professional Summary
                    </h2>
                    <p className="text-base leading-relaxed">
                        Creative Design Engineer and Full-Stack Developer with expertise in modern web technologies and design systems.
                        Passionate about creating innovative digital experiences that push boundaries. Currently at Jux Studios,
                        bringing together technical expertise and creative vision to build exceptional web applications.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <Briefcase className="h-5 w-5" />
                        Work Experience
                    </h2>

                    <div className="space-y-4">
                        <h3 className="text-xl font-medium">Design Engineer</h3>
                        <p className="text-shamock-green-600 dark:text-shamock-green-400 font-medium">Jux Studios | Current</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Lead design and development of modern web applications using React 19 and Next.js 15</li>
                            <li>Implement design systems and maintain high code quality standards</li>
                            <li>Collaborate with cross-functional teams to create innovative digital solutions</li>
                            <li>Mentor team members and contribute to technical architecture decisions</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-medium">Assistant Creative Director</h3>
                        <p className="text-shamock-green-600 dark:text-shamock-green-400 font-medium">DNMGD Apparel | Previous</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Led creative direction for fashion brand digital presence</li>
                            <li>Managed design projects and brand consistency across platforms</li>
                            <li>Oversaw creative campaigns and brand development initiatives</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <Code2 className="h-5 w-5" />
                        Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <h3 className="text-lg font-medium">Frontend</h3>
                            <p>React 19, Next.js 15, TypeScript, Tailwind CSS, Framer Motion</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-medium">Backend</h3>
                            <p>Node.js, REST APIs, GraphQL, Contentful CMS</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-medium">Design</h3>
                            <p>UI/UX Design, Figma, Adobe Creative Suite, Design Systems</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-medium">Tools</h3>
                            <p>Git, VS Code, pnpm, Biome</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <FolderGit2 className="h-5 w-5" />
                        Key Projects
                    </h2>

                    <div className="space-y-4">
                        <h3 className="text-xl font-medium">Portfolio Website</h3>
                        <p className="text-sm text-shamock-green-600 dark:text-shamock-green-400">
                            Next.js 15, React 19, TypeScript, Tailwind CSS, Contentful CMS
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Built responsive portfolio with dark/light theme switching</li>
                            <li>Integrated multiple content sources (Contentful, Substack, Hashnode)</li>
                            <li>Implemented smooth animations and accessible UI components</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-medium">Content Management System</h3>
                        <p className="text-sm text-shamock-green-600 dark:text-shamock-green-400">
                            Contentful, Next.js, TypeScript
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Developed headless CMS solution for dynamic project management</li>
                            <li>Created rich media support with image carousels and video integration</li>
                            <li>Built reusable component library with technology stack visualization</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <PenTool className="h-5 w-5" />
                        Writing & Content
                    </h2>
                    <div className="flex flex-col gap-2">
                        <a href="https://mmnldm.hashnode.dev" target="_blank" rel="noopener noreferrer" className="text-shamock-green-600 dark:text-shamock-green-400 hover:underline">
                            Technical Blog
                        </a>
                        <a href="https://zimah.substack.com" target="_blank" rel="noopener noreferrer" className="text-shamock-green-600 dark:text-shamock-green-400 hover:underline">
                            Newsletter
                        </a>
                    </div>
                    <p className="mt-2">Focus Areas: Design systems, modern web development, user experience</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Current Focus
                    </h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Advanced React patterns and performance optimization</li>
                        <li>Building accessible, high-performance web applications</li>
                        <li>Contributing to open source projects</li>
                        <li>Writing technical articles on design and development</li>
                    </ul>
                </section>

                <footer className="mt-12 text-sm text-center text-smoky-black-500 dark:text-misty-rose-400">
                    References available upon request
                </footer>
            </div>
        </div>
    )
} 
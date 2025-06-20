import { Badge } from "@/components/ui/badge"

interface Technology {
    name: string
    category?: string
}

interface TechStackProps {
    technologies: Technology[]
}

export function TechStack({ technologies }: TechStackProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
                <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs bg-misty-rose-100 dark:bg-smoky-black-800 text-smoky-black-800 dark:text-misty-rose-100 transition-colors hover:bg-shamock-green-100 hover:text-shamock-green-800 dark:hover:bg-shamock-green-700 dark:hover:text-shamock-green-100 border border-transparent"
                >
                    {tech.name}
                </Badge>
            ))}
        </div>
    )
}

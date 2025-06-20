"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectCarouselProps {
    images: string[]
    projectTitle: string
}

export function ProjectCarousel({ images, projectTitle }: ProjectCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    if (images.length === 0) return null

    // Helper function to determine if a file is a video
    const isVideo = (url: string) => {
        const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi']
        return videoExtensions.some(ext => url.toLowerCase().includes(ext))
    }

    const currentMedia = images[currentIndex] || "/placeholder.svg"
    const isCurrentVideo = isVideo(currentMedia)

    return (
        <div className="relative group">
            <div className="aspect-video relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                {isCurrentVideo ? (
                    <video
                        src={currentMedia}
                        className="w-full h-full object-cover"
                        controls
                        loop
                        muted
                        autoPlay
                    />
                ) : (
                    <Image
                        src={currentMedia}
                        alt={`${projectTitle} screenshot ${currentIndex + 1}`}
                        fill
                        className="object-cover"
                    />
                )}

                {images.length > 1 && (
                    <>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={goToPrevious}
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={goToNext}
                        >
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </>
                )}
            </div>

            {images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex
                                ? "bg-shamock-green-500"
                                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

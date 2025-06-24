"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"

interface ProjectCarouselProps {
    images: string[]
    projectTitle: string
}

// Helper function to determine if URL is a video
function isVideoUrl(url: string): boolean {
    return url.match(/\.(mp4|webm|ogg)$/i) !== null
}

export function ProjectCarousel({ images, projectTitle }: ProjectCarouselProps) {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [api, setApi] = useState<CarouselApi>()

    useEffect(() => {
        if (!api) return

        api.on("select", () => {
            const selectedIndex = api.selectedScrollSnap()
            setCurrentIndex(selectedIndex)
        })
    }, [api])

    useEffect(() => {
        // Preload the current video and the next one
        const preloadVideos = () => {
            if (videoRefs.current[currentIndex]) {
                videoRefs.current[currentIndex].load()
            }
            // Preload next video if it exists
            const nextIndex = (currentIndex + 1) % images.length
            if (videoRefs.current[nextIndex]) {
                videoRefs.current[nextIndex].preload = "metadata"
            }
        }

        preloadVideos()
    }, [currentIndex, images.length])

    if (images.length === 0) return null

    const currentMedia = images[currentIndex] || "/placeholder.svg"
    const isCurrentVideo = isVideoUrl(currentMedia)

    return (
        <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
                {images.map((media, index) => (
                    <CarouselItem key={media}>
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                            {isVideoUrl(media) ? (
                                <video
                                    ref={(el) => {
                                        videoRefs.current[index] = el
                                    }}
                                    className="w-full h-full object-cover"
                                    loop
                                    muted
                                    playsInline
                                    autoPlay
                                    preload={index === currentIndex ? "auto" : "metadata"}
                                    poster={`${media.split('.')[0]}.jpg`}
                                    onLoadedData={() => {
                                        if (index === currentIndex) {
                                            videoRefs.current[index]?.play()
                                        }
                                    }}
                                >
                                    <source src={media} type={`video/${media.split('.').pop()}`} />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <Image
                                    src={media}
                                    alt={`${projectTitle} screenshot ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                    priority={index === 0}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    quality={85}
                                />
                            )}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

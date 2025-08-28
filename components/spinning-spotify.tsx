"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface SpinningSpotifyProps {
    isCurrentlyPlaying: boolean
    title: string
    artist: string
    url?: string
    albumImage?: string
}

export function SpinningSpotify({ isCurrentlyPlaying, title, artist, url, albumImage }: SpinningSpotifyProps) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const status = isCurrentlyPlaying ? "Currently playing" : "Recently played"
    const spotifyIconColor = isCurrentlyPlaying
        ? "fill-shamock-green-500" // Use fill instead of text
        : "fill-current" // Default color

    if (!isMounted) {
        return (
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-misty-rose-100 dark:hover:bg-smoky-black-800/50 transition-colors">
                {albumImage ? (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                        <img
                            src={albumImage}
                            alt={title}
                            className="w-12 h-12 rounded shadow object-cover"
                        />
                    </a>
                ) : (
                    <div className="p-2 bg-smoky-black-50 dark:bg-misty-rose-900/20 rounded-lg">
                        <div className="w-5 h-5 bg-gray-400 rounded" />
                    </div>
                )}
                <div className="space-y-1">
                    <h4 className="font-medium text-smoky-black-900 dark:text-misty-rose-100">{title}</h4>
                    <p className="text-sm text-smoky-black-700 dark:text-misty-rose-300">{artist}</p>
                    <p className="text-lg text-smoky-black-500 dark:text-misty-rose-400">{status}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="relative flex items-center gap-4 p-6 rounded-lg hover:bg-misty-rose-100 dark:hover:bg-smoky-black-800/50 transition-colors min-h-[120px]">
            {/* Left side - Album image and track info */}
            <div className="flex items-start gap-4 flex-1">
                {albumImage ? (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                        <img
                            src={albumImage}
                            alt={title}
                            className="w-12 h-12 rounded shadow object-cover"
                        />
                    </a>
                ) : (
                    <div className="p-2 bg-smoky-black-50 dark:bg-misty-rose-900/20 rounded-lg">
                        <div className="w-5 h-5 bg-gray-400 rounded" />
                    </div>
                )}
                <div className="space-y-1">
                    {url ? (
                        <a href={url} target="_blank" rel="noopener noreferrer" className="font-medium text-smoky-black-900 dark:text-misty-rose-100 hover:underline">
                            {title}
                        </a>
                    ) : (
                        <h4 className="font-medium text-smoky-black-900 dark:text-misty-rose-100">{title}</h4>
                    )}
                    <p className="text-sm text-smoky-black-700 dark:text-misty-rose-300">{artist}</p>
                </div>
            </div>
        </div>
    )
} 
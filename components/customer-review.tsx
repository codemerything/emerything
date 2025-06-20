"use client"

import { useState, useEffect } from "react"

interface Review {
    id: string
    author: string
    role: string
    company: string
    messages: {
        text: string
        timestamp: string
        isClient: boolean
    }[]
}

interface CustomerReviewProps {
    review: Review
}

export function CustomerReview({ review }: CustomerReviewProps) {
    const [visibleMessages, setVisibleMessages] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleMessages((prev) => {
                if (prev < review.messages.length) {
                    return prev + 1
                }
                clearInterval(timer)
                return prev
            })
        }, 800)

        return () => clearInterval(timer)
    }, [review.messages.length])

    return (
        <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 font-mono text-sm">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-xs ml-2">
                    Chat with {review.author} • {review.role} at {review.company}
                </div>
            </div>

            {/* Messages */}
            <div className="space-y-4 max-h-96 overflow-y-auto">
                {review.messages.slice(0, visibleMessages).map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.isClient ? "justify-end" : "justify-start"} animate-in slide-in-from-bottom-2 duration-300`}
                    >
                        <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.isClient ? "bg-shamock-green-600 text-white ml-8" : "bg-gray-700 text-gray-100 mr-8"
                                }`}
                        >
                            <p className="text-sm leading-relaxed">{message.text}</p>
                            <div className={`text-xs mt-1 opacity-70 ${message.isClient ? "text-red-100" : "text-gray-400"}`}>
                                {message.timestamp}
                            </div>
                        </div>
                    </div>
                ))}

                {visibleMessages < review.messages.length && (
                    <div className="flex justify-start">
                        <div className="bg-gray-700 text-gray-400 px-4 py-2 rounded-lg mr-8">
                            <div className="flex gap-1">
                                <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                                <div
                                    className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.1s" }}
                                ></div>
                                <div
                                    className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

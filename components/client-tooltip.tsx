"use client"

import { useState, useEffect } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ClientTooltipProps {
    children: React.ReactNode
    content: React.ReactNode
    className?: string
}

export function ClientTooltip({ children, content, className }: ClientTooltipProps) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return <>{children}</>
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent className={className}>
                    {content}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
} 
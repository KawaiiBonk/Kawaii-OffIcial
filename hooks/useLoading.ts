import { useState, useEffect } from 'react'
import { BACKGROUNDS } from '../lib/backgrounds'

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    // Preload the first background
    const preloadImage = new Image()
    preloadImage.src = BACKGROUNDS[0]
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 3 // Faster progress increments
      })
    }, 15) // Faster interval

    preloadImage.onload = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 200) // Reduced delay for faster transition
    }

    // Fallback to ensure loading doesn't take too long
    const fallbackTimeout = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Maximum 1.5 seconds loading time

    return () => {
      clearInterval(interval)
      clearTimeout(fallbackTimeout)
    }
  }, [])

  return {
    isLoading,
    loadingProgress
  }
}
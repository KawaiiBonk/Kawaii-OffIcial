import { useState, useEffect } from 'react'
import { BACKGROUNDS, getRandomInterval } from '../lib/backgrounds'

export const useBackgroundCycling = (isLoading: boolean) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0)
  const [nextBgIndex, setNextBgIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Background cycling effect
  useEffect(() => {
    if (isLoading) return // Don't start cycling during loading
    
    const cycleBackground = () => {
      setIsTransitioning(true)
      
      setTimeout(() => {
        setCurrentBgIndex(nextBgIndex)
        setNextBgIndex((nextBgIndex + 1) % BACKGROUNDS.length)
        setIsTransitioning(false)
      }, 1000) // Transition duration
    }
    
    const interval = setInterval(cycleBackground, getRandomInterval())
    
    return () => clearInterval(interval)
  }, [nextBgIndex, isLoading])

  // Preload all backgrounds
  useEffect(() => {
    BACKGROUNDS.forEach(url => {
      const img = new Image()
      img.src = url
    })
  }, [])

  return {
    currentBgIndex,
    nextBgIndex,
    isTransitioning
  }
}
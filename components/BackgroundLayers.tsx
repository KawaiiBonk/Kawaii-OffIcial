interface BackgroundLayersProps {
  currentBgIndex: number
  nextBgIndex: number
  isTransitioning: boolean
  backgrounds: string[]
}

export const BackgroundLayers = ({ 
  currentBgIndex, 
  nextBgIndex, 
  isTransitioning, 
  backgrounds 
}: BackgroundLayersProps) => {
  const currentBackgroundStyle = {
    backgroundImage: `url(${backgrounds[currentBgIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '100vh',
    width: '100%',
    position: 'fixed' as const,
    top: 0,
    left: 0,
    opacity: isTransitioning ? 0 : 0.9,
    zIndex: -1,
    transition: 'opacity 1s ease-in-out',
  }

  const nextBackgroundStyle = {
    backgroundImage: `url(${backgrounds[nextBgIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '100vh',
    width: '100%',
    position: 'fixed' as const,
    top: 0,
    left: 0,
    opacity: isTransitioning ? 0.9 : 0,
    zIndex: -2,
    transition: 'opacity 1s ease-in-out',
  }

  return (
    <>
      {/* Current background */}
      <div style={currentBackgroundStyle} />
      {/* Next background for smooth transitions */}
      <div style={nextBackgroundStyle} />
    </>
  )
}
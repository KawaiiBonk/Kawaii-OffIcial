interface LoadingScreenProps {
  isLoading: boolean
  loadingProgress: number
}

export const LoadingScreen = ({ isLoading, loadingProgress }: LoadingScreenProps) => {
  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 transition-all duration-1000 ease-in-out">
      <div className="relative">
        <div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-white/5 to-transparent rounded-full transform transition-transform duration-1000" />
        <div className="relative text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-extralight text-white/80 tracking-[0.5em] transition-all duration-1000">KAWAII</h2>
            <p className="text-2xl font-extralight text-white/50 tracking-[0.25em] transition-all duration-1000">かわいい</p>
          </div>
          <div className="w-48 h-[1px] bg-white/5 rounded-full overflow-hidden mx-auto">
            <div 
              className="h-full bg-white/30 backdrop-blur-sm transition-all duration-500 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <p className="text-white/30 tracking-[0.75em] text-xs font-light">
            {loadingProgress < 100 ? 'LOADING' : 'READY'}
          </p>
        </div>
      </div>
    </div>
  )
}
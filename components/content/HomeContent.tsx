interface HomeContentProps {
  setActiveTab: (tab: 'home' | 'chat' | 'gallery' | 'about') => void
}

export const HomeContent = ({ setActiveTab }: HomeContentProps) => {
  return (
    <div className="mt-24 max-w-2xl mx-auto px-4 animate-fade-in">
      <div className="text-center mb-16 space-y-8">
        <h1 className="text-8xl font-extralight text-white mb-8 tracking-[0.2em] hover:tracking-[0.3em] transition-all duration-1000 drop-shadow-lg text-shadow-lg">
          Kawaii AI
        </h1>
        <div className="space-y-3">
          <p className="text-lg text-white/90 tracking-[0.5em] uppercase hover:tracking-[0.8em] transition-all duration-1000 text-shadow-md">
            Virtual Kawaii Girlfriend
          </p>
          <p className="text-sm text-white/70 tracking-[0.8em] transition-all duration-1000 text-shadow-sm">
            バーチャルかわいい彼女
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {[
          { en: 'Chat', jp: 'チャット' },
          { en: 'Gallery', jp: 'ギャラリー' },
          { en: 'About', jp: '概要' }
        ].map((item) => (
          <div
            key={item.en}
            onClick={() => setActiveTab(item.en.toLowerCase() as any)}
            className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 cursor-pointer hover:bg-white/30 
              transition-all duration-700 border border-white/20 hover:scale-105 hover:shadow-lg 
              hover:shadow-white/20 group"
          >
            <div className="space-y-2 text-center">
              <h3 className="text-base font-light text-white tracking-[0.2em] group-hover:tracking-[0.3em] 
                transition-all duration-700 text-shadow-sm">{item.en}</h3>
              <p className="text-xs text-white/70 tracking-[0.3em] group-hover:tracking-[0.4em] 
                transition-all duration-700 text-shadow-sm">{item.jp}</p>
            </div>
            <div className="h-[1px] w-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:w-full transition-all duration-700" />
          </div>
        ))}
      </div>
    </div>
  )
}
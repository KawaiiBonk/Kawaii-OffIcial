import { codeExamples } from '../../data/codeExamples'

export const GalleryContent = () => {
  return (
    <div className="max-w-4xl mx-auto mt-24 px-4 animate-fade-in">
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-4xl font-extralight text-white tracking-[0.3em] drop-shadow-lg text-shadow-lg">Code Previews</h2>
        <p className="text-sm text-white/70 tracking-[0.5em] text-shadow-sm">コードプレビュー</p>
      </div>
      <p className="text-center text-white/90 mb-8 tracking-wider text-shadow-sm">
        Advanced Integration Examples & API Implementations ⚡
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {codeExamples.map((example, i) => (
          <div key={i} className="group bg-black/80 backdrop-blur-xl rounded-xl p-3 hover:bg-black/85 transition-all duration-500 border border-white/10 shadow-xl flex flex-col h-fit">
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-sm font-semibold tracking-[0.1em] text-shadow-sm flex items-center gap-2">
                  <span className="text-green-400">{example.icon}</span>
                  {example.title}
                </h3>
                <span className="text-xs text-white/50 bg-white/10 px-1.5 py-0.5 rounded-full font-mono text-[10px]">
                  {example.language}
                </span>
              </div>
              <p className="text-white/70 text-[11px] leading-relaxed text-shadow-sm mb-2">{example.description}</p>
            </div>
            <div className="bg-gray-900/90 rounded-lg p-2 overflow-x-auto border border-white/5 flex-1 mb-2">
              <pre className="text-[10px] font-mono leading-tight whitespace-pre-wrap">
                <code dangerouslySetInnerHTML={{ __html: example.code }} />
              </pre>
            </div>
            <div className="flex flex-wrap gap-1">
              {example.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-[10px] text-white/60 bg-white/10 px-1.5 py-0.5 rounded-full font-mono hover:bg-white/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
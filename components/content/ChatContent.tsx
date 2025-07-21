import { RefObject } from 'react'
import { scrollToBottom } from '../../utils/scrollUtils'

interface ChatContentProps {
  messages: string[]
  isTyping: boolean
  inputMessage: string
  setInputMessage: (message: string) => void
  handleSendMessage: () => void
  chatContainerRef: RefObject<HTMLDivElement>
}

export const ChatContent = ({
  messages,
  isTyping,
  inputMessage,
  setInputMessage,
  handleSendMessage,
  chatContainerRef
}: ChatContentProps) => {
  return (
    <div className="max-w-3xl mx-auto mt-24 px-4 pb-8 animate-fade-in flex flex-col">
      <div ref={chatContainerRef}>
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-3xl font-light text-white tracking-[0.3em] text-shadow-lg drop-shadow-lg">Chat</h2>
          <p className="text-sm text-white/80 tracking-[0.5em] text-shadow-md">チャット</p>
        </div>
        <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30 space-y-6 ring-1 ring-white/20">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 last:mb-0 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <div 
                className={`inline-block max-w-[85%] ${
                  index % 2 === 0 
                    ? 'bg-white/20 rounded-2xl rounded-tr-sm border border-white/30 shadow-lg' 
                    : 'bg-white/15 rounded-2xl rounded-tl-sm border border-white/25 shadow-lg'
                } px-6 py-4 hover:bg-white/55 transition-all duration-300 group backdrop-blur-sm`}
              >
                <p className="text-white text-base leading-relaxed font-medium group-hover:text-white text-shadow-lg drop-shadow-lg">{message}</p>
              </div>
              <div className="mt-1">
                <p className="text-xs text-white/80 tracking-[0.2em] text-shadow-md font-normal">
                  {index % 2 === 0 ? 'You' : 'Kawaii AI'} • Just now
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="text-left">
              <div className="inline-block bg-white/15 rounded-2xl rounded-tl-sm p-4 shadow-lg backdrop-blur-sm border border-white/25">
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 bg-white/90 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0ms' }} />
                  <span className="w-2.5 h-2.5 bg-white/90 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '150ms' }} />
                  <span className="w-2.5 h-2.5 bg-white/90 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-8">
          <div className="bg-white/35 backdrop-blur-xl rounded-2xl p-5 border border-white/30 flex shadow-xl ring-1 ring-white/20">
            <input
              disabled={isTyping}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              onFocus={() => setTimeout(() => scrollToBottom(chatContainerRef.current), 100)}
              placeholder="Type your message..."
              className={`flex-1 bg-transparent border-none focus:outline-none text-white placeholder:text-white/40 tracking-[0.15em] text-base py-2 animate-fade-in text-shadow-lg font-medium ${
                isTyping ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
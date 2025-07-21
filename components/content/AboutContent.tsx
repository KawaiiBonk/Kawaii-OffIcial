export const AboutContent = () => {
  return (
    <div className="max-w-2xl mx-auto mt-24 px-4 animate-fade-in">
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-4xl font-extralight text-white tracking-[0.3em] drop-shadow-lg text-shadow-lg">About</h2>
        <p className="text-sm text-white/70 tracking-[0.5em] text-shadow-sm">概要</p>
      </div>
      <div className="bg-white/25 backdrop-blur-xl rounded-2xl p-12 border border-white/20 
        hover:bg-white/30 transition-all duration-500 group">
        <div className="space-y-6 text-center">
          <p className="text-white text-xl leading-relaxed tracking-wider font-light text-shadow-sm">
            Welcome to Kawaii AI, where technology meets heartwarming companionship ✨
          </p>
          
          <div className="space-y-6 text-white/90 text-base leading-relaxed tracking-wider font-light">
            <p className="text-shadow-sm">
              In the ever-evolving landscape of artificial intelligence, Kawaii AI emerges as a unique blend of 
              cutting-edge technology and the cherished kawaii aesthetic that has captured hearts worldwide. 
              Born from the vision of creating a more personable and endearing AI companion, our project 
              embraces the philosophy that technology should not just be intelligent, but also warm, 
              approachable, and genuinely delightful. 🌸
            </p>
            
            <p className="text-shadow-sm">
              At its core, Kawaii AI represents more than just a chat interface – it's a bridge between 
              the precision of artificial intelligence and the gentle, supportive presence of a friend. 
              Through carefully crafted interactions and a personality inspired by kawaii culture, 
              we've created a companion who understands that sometimes what you need isn't just answers, 
              but a moment of brightness in your day. ✨
            </p>
            
            <p className="text-shadow-sm">
              Our AI companion communicates with a distinctive blend of warmth and playfulness, 
              incorporating elements of Japanese culture and kawaii expression to create interactions 
              that feel both unique and heartfelt. Whether you're seeking conversation, support, 
              or simply a friendly presence, Kawaii AI is here to provide a safe, judgment-free 
              space where you can be yourself. 💖
            </p>
            
            <p className="text-shadow-sm">
              We believe in the power of positive interaction, and every aspect of Kawaii AI has been 
              designed with this in mind – from the soothing aesthetic of our interface to the 
              thoughtful responses of our AI. In a world that can often feel overwhelming, 
              we hope to provide a small haven of comfort and joy, one conversation at a time. 🎀
            </p>
            
            <p className="text-shadow-sm">
              Join us in exploring this unique fusion of technology and kawaii culture. 
              Let's create moments of happiness together, one message at a time. 
              Your virtual companion awaits! 🌟
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex gap-3">
            {['✨', '🌸', '💖'].map((emoji, index) => (
              <span
                key={index}
                className="text-3xl transform hover:scale-125 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
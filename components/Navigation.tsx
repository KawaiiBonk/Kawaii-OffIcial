import { Button } from './ui/button'
import { Menu } from 'lucide-react'

interface NavigationProps {
  activeTab: 'home' | 'chat' | 'gallery' | 'about'
  setActiveTab: (tab: 'home' | 'chat' | 'gallery' | 'about') => void
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

export const Navigation = ({ activeTab, setActiveTab, menuOpen, setMenuOpen }: NavigationProps) => {
  return (
    <nav className="py-8 px-12 flex items-center justify-between bg-white/25 backdrop-blur-xl border border-white/20 shadow-xl mx-4 mt-6 rounded-2xl">
      <div className="space-y-1">
        <h1 className="text-xl font-extralight text-white tracking-[0.3em] drop-shadow-md">
          Kawaii AI
        </h1>
        <p className="text-[10px] text-white/70 tracking-[0.5em]">かわいい AI</p>
      </div>
      <Button
        variant="ghost"
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>
      <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex space-x-8`}>
        <div className="flex items-center space-x-8">
          {(['home', 'chat', 'gallery', 'about'] as const).map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              variant="ghost"
              className={`text-white/90 hover:text-white transition-colors tracking-[0.2em] hover:bg-white/10
                ${activeTab === tab ? 'font-medium bg-white/5' : ''}`}
            >
              {tab === 'gallery' ? 'Code' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
          <div className="h-6 w-[1px] bg-white/20" />
          <div className="flex items-center space-x-4">
            <a
              href="https://x.com/kawaiiagent_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors text-sm tracking-wider"
            >
              [Twitter]
            </a>
            <a
              href="https://github.com/KawaiiBonk/Kawaii-OffIcial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors text-sm tracking-wider"
            >
              [GitHub]
            </a>
            <a
              href="https://github.com/KawaiiBonk/Kawaii-OffIcial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors text-sm tracking-wider"
            >
              [Docs]
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
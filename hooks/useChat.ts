import { useState, useEffect, useRef } from 'react'
import { getChatResponse } from '../lib/cohere'
import { scrollToBottom } from '../utils/scrollUtils'

export const useChat = () => {
  const [messages, setMessages] = useState<string[]>([
    "Konnichiwa! I'm your virtual companion~ ✨",
    "Let's chat and make your day brighter! 🌸"
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [inputMessage, setInputMessage] = useState('')
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Scroll on new messages or typing status change
  useEffect(() => {
    scrollToBottom(chatContainerRef.current)
  }, [messages, isTyping])

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      setMessages(prev => [...prev, inputMessage])
      scrollToBottom(chatContainerRef.current)
      setIsTyping(true)
      const userInput = inputMessage.trim()
      setInputMessage('')
      scrollToBottom(chatContainerRef.current)
      
      try {
        // Add natural typing delay (500-1500ms)
        const typingDelay = 500 + Math.random() * 1000
        await new Promise(resolve => setTimeout(resolve, typingDelay))
        
        const response = await getChatResponse(userInput)
        setMessages(prev => [...prev, response])
        scrollToBottom(chatContainerRef.current)
      } catch (error) {
        setMessages(prev => [...prev, "Gomen ne~ Something went wrong... 🥺"])
        scrollToBottom(chatContainerRef.current)
      } finally {
        setIsTyping(false)
      }
    }
  }

  return {
    messages,
    isTyping,
    inputMessage,
    setInputMessage,
    handleSendMessage,
    chatContainerRef
  }
}
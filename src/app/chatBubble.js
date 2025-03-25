"use client"

import { useState } from "react"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ text: "Hi there! I'm Ayden, How can I help you today?", isBot: true }])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    // Add user message
    const userMessage = { text: inputValue, isBot: false }
    setMessages([...messages, userMessage])
    setInputValue("")

    // Simulate AI response
    setIsLoading(true)

    // In a real implementation, you would call your AI service here
    setTimeout(() => {
      const botResponse = {
        text: "Thanks for your message. Our team will get back to you soon. Is there anything else I can help with?",
        isBot: true,
      }
      setMessages((prev) => [...prev, botResponse])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? "bg-red-500 rotate-90" : "bg-primary"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
          {/* Chat Header */}
          <div className="bg-primary p-4 text-white">
            <h3 className="font-medium">Success Healthcare Assistant</h3>
            <p className="text-xs opacity-80">We typically reply within a few minutes</p>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-96 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot ? "bg-gray-100 text-gray-800" : "bg-primary text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 text-gray-800 flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Typing...</span>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="border-t p-4 flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="bg-primary text-white p-2 rounded-r-lg" disabled={isLoading}>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ChatBubble


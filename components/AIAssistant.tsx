import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Bot, Loader2 } from 'lucide-react';
import { getCreativeSuggestion } from '../services/geminiService';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'হাই! আমি আখড়া AI। পড়াশোনা বা আর্ট সাপ্লাই নিয়ে কনফিউজড? আমাকে জিজ্ঞেস করতে পারেন! 🎨 📚' }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    const suggestion = await getCreativeSuggestion(userMessage);

    setMessages(prev => [...prev, { role: 'assistant', text: suggestion }]);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-[calc(100vw-32px)] sm:w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-[#EBE5DA] z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-akhra-brown to-[#7a5e54] p-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
            <div className="p-1.5 bg-white/20 rounded-full">
                <Bot size={18} className="text-white" />
            </div>
            <div>
                <h3 className="font-bold text-sm">Akhra AI Assistant</h3>
                <p className="text-[10px] opacity-80">Powered by Gemini</p>
            </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors">
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F9F7F2]">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-akhra-brown text-white rounded-br-none' 
                  : 'bg-white text-ink border border-[#EBE5DA] rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-[#EBE5DA] shadow-sm flex items-center gap-2">
              <Loader2 size={14} className="animate-spin text-akhra-brown" />
              <span className="text-xs text-gray-500">লিখছে...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-white border-t border-[#EBE5DA]">
        <div className="flex items-center gap-2 bg-[#F9F7F2] rounded-full px-4 py-2 border border-transparent focus-within:border-akhra-brown/50 transition-colors">
          <input 
            type="text" 
            className="flex-1 bg-transparent text-sm focus:outline-none text-ink placeholder-gray-400"
            placeholder="Ask for suggestions..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="text-akhra-brown hover:scale-110 transition-transform disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
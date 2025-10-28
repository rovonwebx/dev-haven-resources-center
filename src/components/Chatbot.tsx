import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Send, Bot, X, Loader2, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import clsx from 'clsx'; // A tiny utility for conditional classnames

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your CKR AI assistant. Feel free to ask me anything about our resources, projects, or career guidance.",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // --- Core functionality remains identical ---

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);
  
  // Auto-resize textarea
  useEffect(() => {
    if (textAreaRef.current) {
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);


  const sendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('gemini-chat', {
        body: { message: messageText }
      });

      if (error) throw error;

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "I apologize, but I couldn't process your request.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);

    } catch (error) {
      console.error('Error calling Gemini chat:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting right now. Please try again in a moment.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    const message = inputValue.trim();
    if (!message) return;
    setInputValue('');
    await sendMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // --- JSX with Enhanced Styling ---
  return (
    <>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes slideOut {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to { opacity: 0; transform: translateY(20px) scale(0.95); }
        }
        .animate-slide-in { animation: slideIn 0.3s ease-out forwards; }
        .animate-slide-out { animation: slideOut 0.3s ease-out forwards; }
      `}</style>

      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "rounded-full w-16 h-16 bg-gray-900 text-white shadow-xl flex items-center justify-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:bg-black",
            { 'rotate-90': isOpen }
          )}
          size="icon"
        >
          {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 w-[440px] max-w-[90vw] h-[70vh] max-h-[600px] z-40 origin-bottom-right animate-slide-in">
          <div className="flex flex-col h-full bg-card/95 backdrop-professional rounded-2xl shadow-xl border border-border/50">
            
            {/* Header */}
            <header className="flex items-center justify-between p-4 border-b border-border/50 flex-shrink-0 bg-gradient-to-r from-background to-muted/30">
              <div className='flex items-center gap-3'>
                <div className="relative">
                    <Bot className="w-8 h-8 text-primary-blue" />
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-success-green border-2 border-background" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">CKR AI Assistant</h3>
                  <p className="text-xs text-success-green font-medium">Online • Professional Support</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full text-muted-foreground hover:bg-muted/50">
                  <X className="w-5 h-5"/>
              </Button>
            </header>
            
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5">
              {messages.map((message) => (
                <div key={message.id} className={clsx('flex items-end gap-2', { 'justify-end': !message.isBot })}>
                  {message.isBot && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary-blue flex items-center justify-center flex-shrink-0 shadow-md">
                      <Bot size={18} className="text-white" />
                    </div>
                  )}
                  <div className={clsx(
                      'max-w-[85%] p-3 rounded-lg leading-relaxed shadow-sm',
                      message.isBot 
                        ? 'bg-muted/70 text-foreground rounded-bl-none border border-border/30'
                        : 'bg-gradient-to-br from-primary to-primary-blue text-white rounded-br-none'
                  )}>
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-end gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary-blue flex items-center justify-center flex-shrink-0 shadow-md">
                        <Bot size={18} className="text-white" />
                    </div>
                    <div className="p-3 rounded-lg bg-muted/70 rounded-bl-none border border-border/30">
                        <Loader2 className="w-5 h-5 animate-spin text-primary-blue" />
                    </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-border/50 p-3 bg-gradient-to-r from-background to-muted/30">
              <div className="flex items-center gap-2 bg-muted/50 rounded-full p-1.5 border border-border/30">
                <textarea
                  ref={textAreaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about engineering resources..."
                  className="flex-1 bg-transparent text-sm text-foreground px-3 py-2 focus:outline-none resize-none max-h-24 placeholder:text-muted-foreground"
                  rows={1}
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  onClick={handleSendMessage}
                  size="icon"
                  className={clsx(
                    "rounded-full w-9 h-9 flex-shrink-0 transition-all duration-200",
                    inputValue.trim()
                        ? 'bg-gradient-to-br from-primary to-primary-blue text-white hover:shadow-md hover:scale-105'
                        : 'bg-muted text-muted-foreground'
                  )}
                  disabled={isLoading || !inputValue.trim()}
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

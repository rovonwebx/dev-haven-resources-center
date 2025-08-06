import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, Bot, User, Loader2, ArrowLeft, Server, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import clsx from 'clsx';
import { Analytics } from '@vercel/analytics/react';

// --- The Message interface remains unchanged ---
interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatterBox = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Welcome to CKR ChatterBox! 🚀 I'm your AI assistant powered by Gemini. I'm here to help with DHRC resources, engineering topics, DSA, career guidance, and much more. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // --- All functional hooks remain unchanged ---
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  // --- Core sendMessage function remains unchanged ---
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
        text: data.response || "I apologize, but I couldn't process your request at the moment. Please try again.",
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error("ChatterBox Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please check your internet connection and try again.",
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

  return (
    <div className="flex flex-col h-screen bg-neutral-950 font-sans text-white">
      <Analytics />
      
      {/* --- Restyled Top Notification --- */}
      <div className="bg-blue-900/50 p-3 text-center text-sm text-blue-200 border-b border-blue-800/50">
        <p>
          To test the full potential of the ChatterBox, please{" "}
          <a href="https://dhrc-tools.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-blue-300">
            log in
          </a>
          .
        </p>
      </div>

      {/* --- Consistent Header --- */}
      <header className="flex items-center p-4 border-b border-neutral-800 bg-neutral-900 flex-shrink-0">
        <Link to="/" className="p-2 rounded-full hover:bg-neutral-800">
          <ArrowLeft className="w-5 h-5 text-neutral-300" />
        </Link>
        <div className="flex items-center gap-3 mx-auto">
            <MessageSquare className="w-7 h-7 text-blue-400"/>
            <h1 className="text-xl font-bold text-neutral-100">CKR ChatterBox</h1>
        </div>
        <div className="w-9 h-9"></div> {/* Spacer to balance the back button */}
      </header>

      {/* --- Chat Messages Area --- */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={clsx('flex items-start gap-3 w-full animate-fade-in', {
                'justify-end': !message.isBot,
              })}
            >
              {message.isBot && (
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Bot size={18} className="text-white" />
                </div>
              )}
              <div
                className={clsx(
                  'max-w-[85%] px-4 py-3 rounded-2xl leading-relaxed break-words shadow-md',
                  message.isBot
                    ? 'bg-neutral-800 text-neutral-200'
                    : 'bg-blue-600 text-white'
                )}
              >
                {/* A simple markdown-like renderer for bold and newlines */}
                <p className="whitespace-pre-wrap">
                  {message.text.split(/(\*\*.*?\*\*)/g).map((part, index) => 
                    part.startsWith('**') && part.endsWith('**') ? 
                    <strong key={index}>{part.slice(2, -2)}</strong> : 
                    part
                  )}
                </p>
                <div className="text-xs opacity-60 mt-2 text-right">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
               {!message.isBot && (
                <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <User size={18} className="text-neutral-200" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-3 w-full animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Bot size={18} className="text-white" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-neutral-800 flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
                    <span className="text-sm text-neutral-400">Thinking...</span>
                </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* --- Chat Input Form Area --- */}
      <footer className="p-4 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            className="relative flex items-center"
          >
            <textarea
              ref={textAreaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask anything about engineering, careers, or resources..."
              className="w-full border border-neutral-700 rounded-2xl py-3 pl-4 pr-14 bg-neutral-800 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none max-h-48"
              rows={1}
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 text-white disabled:bg-neutral-700 disabled:text-neutral-400 hover:bg-blue-700 transition-all"
              disabled={isLoading || !inputValue.trim()}
              aria-label="Send message"
            >
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
            </Button>
          </form>
          <p className="text-center text-xs text-neutral-600 mt-3">
             CKR ChatterBox can make mistakes. Consider checking important information.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ChatterBox;

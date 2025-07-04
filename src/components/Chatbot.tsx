
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

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
      text: "Hello! I'm your DHRC AI assistant powered by Gemini. I can help you with any questions about our engineering resources, DSA problems, career guidance, and much more. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const predefinedQuestions = [
    {
      question: "What resources are available in DHRC?",
      shortText: "Available resources"
    },
    {
      question: "Tell me about the DSA section and LeetCode problems",
      shortText: "DSA & LeetCode"
    },
    {
      question: "How can I find internship opportunities?",
      shortText: "Internship opportunities"
    },
    {
      question: "What kind of projects can I build for my portfolio?",
      shortText: "Portfolio projects"
    },
    {
      question: "Show me the learning roadmaps available",
      shortText: "Learning roadmaps"
    },
    {
      question: "What certificates and courses do you recommend?",
      shortText: "Certificates & courses"
    },
    {
      question: "Help me with technical interview preparation",
      shortText: "Interview prep"
    },
    {
      question: "Tell me about upcoming tech events and competitions",
      shortText: "Tech events"
    }
  ];

  const handleQuestionClick = async (question: string) => {
    await sendMessage(question);
  };

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
      console.log('Sending message to Gemini:', messageText);
      
      const { data, error } = await supabase.functions.invoke('gemini-chat', {
        body: { message: messageText }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "I apologize, but I couldn't process your request at the moment. Please try again.",
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error calling Gemini chat:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment, or you can browse our resource sections directly from the main page.",
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
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
          size="icon"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[90vw] z-40">
          <Card className="shadow-2xl border-gray-200">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg py-3">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <div>
                  <h3 className="font-semibold">DHRC AI Assistant</h3>
                  <p className="text-xs text-blue-100">Powered by Gemini AI</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-lg ${
                        message.isBot
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-blue-600 text-white'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.isBot && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                        {!message.isBot && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 p-3 rounded-lg max-w-[85%]">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-4 h-4" />
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="text-sm">Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Predefined Questions */}
              <div className="border-t p-4">
                <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {predefinedQuestions.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(item.question)}
                      disabled={isLoading}
                      className="w-full text-left text-xs p-2 rounded bg-gray-50 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {item.shortText}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about DHRC resources..."
                    className="flex-1 text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows={1}
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                    disabled={isLoading || !inputValue.trim()}
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;

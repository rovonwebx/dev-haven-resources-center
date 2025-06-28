
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

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
      text: "Hello! I'm your DHRC assistant. I can help you navigate through our resources. What would you like to know about?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const predefinedQuestions = [
    {
      question: "What resources are available?",
      answer: "DHRC offers 12 main categories: Certificates (industry certifications), Projects (hands-on portfolio ideas), Ideas (innovation concepts), Blogs (technical articles), DSA (data structures & algorithms), Coding Challenges (programming contests), Internships (career opportunities), Notes (study materials), Documents (technical manuals), Theories (fundamental concepts), Student Projects (innovative student work), and Events (tech competitions & conferences)."
    },
    {
      question: "Tell me about the DSA section",
      answer: "Our DSA section contains comprehensive Data Structures and Algorithms resources including a Company Prep section with 150+ LeetCode problems categorized by difficulty and topic (Arrays, Two Pointers, Sliding Window, Stack, Binary Search, Linked Lists, Trees, Graphs, Dynamic Programming, and more). Perfect for technical interview preparation!"
    },
    {
      question: "What kind of projects can I find?",
      answer: "The Projects section offers hands-on project ideas and portfolio suggestions to help you build practical experience. These range from beginner to advanced levels across various technologies and domains."
    },
    {
      question: "How can I find internships?",
      answer: "Our Internships section provides internship opportunities and career guidance, including tips for applications, interview preparation, and career development resources."
    },
    {
      question: "What are Student Projects?",
      answer: "Student Projects showcases innovative projects built by students across India. It's a great place to get inspired, see what others are building, and potentially collaborate on interesting ideas."
    },
    {
      question: "Tell me about Events",
      answer: "The Events section lists upcoming tech events, programming competitions, hackathons, and conferences. Stay updated with the latest opportunities to network and showcase your skills."
    },
    {
      question: "What certificates are available?",
      answer: "Our Certificates section features industry-recognized certifications and online courses from various platforms and institutions to help advance your technical skills and career."
    },
    {
      question: "How do I access study materials?",
      answer: "Study materials are available in multiple sections: Notes (quick reference guides), Documents (detailed technical documentation), Theories (fundamental concepts), and Blogs (in-depth technical articles and insights)."
    }
  ];

  const handleQuestionClick = (question: string, answer: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: answer,
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: "Thanks for your question! For specific queries, please explore our resource sections or contact our support team. You can also try the predefined questions above for quick answers.",
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
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
            <CardHeader className="bg-blue-600 text-white rounded-t-lg py-3">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <h3 className="font-semibold">DHRC Assistant</h3>
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
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isBot
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-blue-600 text-white'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.isBot && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                        <p className="text-sm">{message.text}</p>
                        {!message.isBot && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Predefined Questions */}
              <div className="border-t p-4">
                <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {predefinedQuestions.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(item.question, item.answer)}
                      className="w-full text-left text-xs p-2 rounded bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      {item.question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="flex-1 text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="w-4 h-4" />
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

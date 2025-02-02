import React from 'react';
import { ScrollArea } from '../ScrollArea';

type Message = {
  content: string;
  sender: 'user' | 'assistant';
  attachment?: { name: string };
};

const ChatMessages = () => {
  const messages: Message[] = [
    {
      content: 'Hello! How can I help you today?',
      sender: 'assistant',
    },
    {
      content: 'I need help with my project',
      sender: 'user',
    },
  ];


  return (
    <div className="w-full max-w-4xl mx-auto h-[calc(100vh-180px)]">
      <ScrollArea className="h-full px-4">
        <div className="space-y-4 py-4">
          {messages.map((message) => (
            <div
              key={message.content}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`flex gap-3 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div className="flex-shrink-0 mt-1">
                  {message.sender === 'assistant' ? (
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">A</span>
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-sm font-semibold">U</span>
                    </div>
                  )}
                </div>

                <div className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    {message.attachment && (
                      <div className="mt-2 bg-white bg-opacity-10 rounded p-2 text-sm">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                          </svg>
                          <span>{message.attachment.name}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatMessages;
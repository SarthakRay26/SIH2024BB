"use client";

import { useState } from "react";
import { Input } from "@nextui-org/input";
import {Button } from "../components/ui/button"
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, sender: "You" },
        { text: "How may I assist you for now?", sender: "OurBot" },
      ]);
      setInputValue(""); // Clear the input field after sending the message
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* Container around the chatbox */}
      <div className="w-full max-w-3xl p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900">
        {/* Message Display Area */}
        <div
          className={`w-full max-w-2xl p-6 rounded-lg shadow-md ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          {messages.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <h2 className="text-center text-lg text-gray-500">
                Welcome to our ChatBot
              </h2>
            </div>
          )}
          <div className="overflow-y-auto max-h-80 p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  message.sender === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-4 rounded-2xl shadow-md max-w-xs ${
                    message.sender === "You"
                      ? theme === "dark"
                        ? "bg-blue-600 text-white"
                        : "bg-blue-500 text-white"
                      : theme === "dark"
                      ? "bg-gray-700 text-gray-200"
                      : "bg-gray-300 text-gray-900"
                  }`}
                  style={{
                    borderRadius:
                      message.sender === "You"
                        ? "20px 20px 0px 20px"
                        : "20px 20px 20px 0px",
                  }}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Input Area */}
        <div className="w-full max-w-2xl flex items-center gap-2 mt-4">
          <Input
            className={`flex-1 ${
              theme === "dark"
                ? "bg-gray-700 text-white placeholder-gray-400"
                : "bg-white text-gray-900 placeholder-gray-500"
            }`}
            placeholder="Type your message..."
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress} // Listen for Enter key press
          />
          <Button
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </div>
      </div>
    </section>
  );
}
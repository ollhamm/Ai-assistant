"use client";
import React, { useState, useRef, useEffect } from "react";
import { Send, Paperclip } from "lucide-react";

interface FormData {
  message: string;
  file: File | null;
}

interface MergeChatProps {
  onSendMessage: (message: string) => void;
}

const MergeChat: React.FC<MergeChatProps> = ({ onSendMessage }) => {
  const [formData, setFormData] = useState<FormData>({
    message: "",
    file: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Auto resize textarea
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [formData.message]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      message: value,
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);  // Menggunakan e dengan tipe yang lebih tepat
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        file: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message && !formData.file) return;

    setIsLoading(true);
    try {
      console.log("Mengirim pesan:", formData.message);
      console.log("File terlampir:", formData.file?.name);

      // Mengirim pesan ke komponen Home
      onSendMessage(formData.message);

      // Simulasi delay untuk pengiriman pesan
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormData({
        message: "",
        file: null,
      });
    } catch (error) {
      console.error("Error mengirim pesan:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const MAX_LENGTH = 500;

  return (
    <div className="fixed bottom-12 max-w-4xl w-full rounded-lg bg-white border border-gray-200 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-2">
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex items-start space-x-2">
            {/* File Upload Button */}
            <label className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors mt-1">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
              <Paperclip className="w-5 h-5 text-gray-500" />
            </label>

            {/* Textarea Field */}
            <div className="flex-1 relative">
              <textarea
                ref={textAreaRef}
                value={formData.message}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                maxLength={MAX_LENGTH}
                placeholder="Ketik pesan..."
                rows={1}
                className="w-full p-2 border-none focus:outline-none focus:ring-0 bg-transparent text-gray-900 resize-none overflow-hidden max-h-[200px]"
                style={{
                  minHeight: "40px",
                }}
              />
              {formData.message.length > 0 && (
                <span className="absolute right-2 bottom-2 text-xs text-gray-400">
                  {formData.message.length}/{MAX_LENGTH}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || (!formData.message && !formData.file)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-1"
            >
              <Send
                className={`w-5 h-5 ${isLoading ? "text-gray-400" : "text-neutral-700"}`}
              />
            </button>
          </div>

          {/* File Preview */}
          {formData.file && (
            <div className="mt-2">
              <div className="bg-gray-100 p-2 rounded-md flex items-center justify-between">
                <span className="text-sm text-gray-600 truncate">
                  {formData.file.name}
                </span>
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, file: null }))}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default MergeChat;

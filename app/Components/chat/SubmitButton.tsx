import React from "react";
import { SubmitButtonProps } from "../types/form";
import { Send } from "lucide-react";

const SubmitButton: React.FC<SubmitButtonProps> = ({ 
    label, 
    isLoading = false 
  }) => {
    return (
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>{isLoading ? 'Mengirim...' : label}</span>
        <Send className="w-5 h-5" />
      </button>
    );
  };
  
  export default SubmitButton;
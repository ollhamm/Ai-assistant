import React from "react";
import { InputProps } from "../types/form";

const FormInput: React.FC<InputProps> = ({
    label,
    id,
    name,
    value,
    onChange,
    placeholder,
    required = false,
  }) => {
    return (
      <div className="space-y-2">
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <input
          type="text"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
          required={required}
        />
      </div>
    );
  };
  
  export default FormInput;
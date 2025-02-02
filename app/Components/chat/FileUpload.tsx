import React from "react";
import { FileUploadProps } from "../types/form";
import { Upload } from 'lucide-react';


const FileUpload: React.FC<FileUploadProps> = ({ onFileChange, selectedFile }) => {
    return (
      <div className="space-y-2">
        <label 
          htmlFor="file" 
          className="block text-sm font-medium text-gray-700"
        >
          Upload File
        </label>
        <div className="relative">
          <input
            type="file"
            id="file"
            onChange={onFileChange}
            className="hidden"
          />
          <label
            htmlFor="file"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
          >
            <Upload className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-600">
              {selectedFile ? selectedFile.name : 'Pilih file'}
            </span>
          </label>
        </div>
      </div>
    );
  };
  
  export default FileUpload;



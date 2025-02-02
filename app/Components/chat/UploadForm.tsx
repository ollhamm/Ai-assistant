import React, {useState} from "react";
import FormInput from "./FormInput";
import FileUpload from "./FileUpload";
import SubmitButton from "./SubmitButton";
import { FormData } from "../types/form";


const UploadForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
      title: '',
      file: null
    });
    const [isLoading, setIsLoading] = useState(false);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setFormData(prev => ({
          ...prev,
          file: e.target.files![0]
        }));
      }
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      
      try {
        // Implementasi logika submit di sini
        console.log('Form submitted:', formData);
        // Simulasi API call
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div className="w-full max-w-md mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Judul"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Masukkan judul"
            required
          />
          
          <FileUpload
            onFileChange={handleFileChange}
            selectedFile={formData.file}
          />
  
          <SubmitButton
            label="Submit"
            isLoading={isLoading}
          />
        </form>
      </div>
    );
  };
  
  export default UploadForm;
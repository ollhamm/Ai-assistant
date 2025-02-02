export interface FormData {
    title : string,
    file : File | null,
}

export interface InputProps {
    label : string,
    id : string,
    name : string,
    value : string,
    onChange : (event : React.ChangeEvent<HTMLInputElement>) => void,
    placeholder : string,
    required : boolean,
}

export interface FileUploadProps {
    onFileChange : (event : React.ChangeEvent<HTMLInputElement>) => void,
    selectedFile : File | null,
}

export interface SubmitButtonProps {
    label : string,
    isLoading : boolean,
}
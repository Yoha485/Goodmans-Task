export interface File {
  name: string;
  url: string;
}

interface AppState {
  selectedFile: File | null;
  uploadedFiles: File[];
  addToUploadedFiles: (file: File) => void;
  setSelectedFile: (file: File) => void;
}

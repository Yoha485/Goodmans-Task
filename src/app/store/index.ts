import create from "zustand";
import { AppState, File } from "../../types";

const useStore = create<AppState>()((set) => ({
  selectedFile: null,
  uploadedFiles: [],
  addToUploadedFiles: (file: File) => set((state) => ({ uploadedFiles: [...state.uploadedFiles, file].slice(-5) })),
  setSelectedFile: (file: File) => set(() => ({ selectedFile: file })),
}));

export default useStore;

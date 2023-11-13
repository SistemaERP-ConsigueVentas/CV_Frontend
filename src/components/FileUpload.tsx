import React, { useState } from "react";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      handleShowFile(file); 
    }
  };

  const handleShowFile = (file: File) => {
    console.log("Mostrar información del archivo:", file);
    alert(`Nombre del archivo: ${file.name}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg mx-auto flex flex-col items-center">
        <h2 className="text-5xl font-bold mb-4 text-[#283C4C]">Subir tus archivos</h2>
        <p className="text-xl mb-8 text-[#283C4C]">
          Sube tus reportes con la tecnología de{" "}
          <span className="font-bold">SolidDocuments</span>
        </p>
        <div className="flex w-full justify-center items-center mb-4">
          <div className="bg-[#52e1ed] p-5 rounded-xl w-[400px] items-center">
            <label
              htmlFor="fileInput"
              className="text-black font-bold text-2xl block mb-2 cursor-pointer text-center"
            >
              Seleccionar documento
            </label>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
              accept=".xls, .xlsx, .doc, .docx, .pdf"
            />
          </div>

          <div className="flex flex-col items-center">
            <button className="bg-[#52e1ed] rounded-full ml-5 h-8 w-8 flex items-center justify-center">
              1
            </button>
            <button className="bg-[#52e1ed] rounded-full ml-5 h-8 w-8 mt-1 flex items-center justify-center">
              2
            </button>
          </div>
        </div>
        <p className="text-gray-600 text-xl mb-4">
          Se admite todo tipo de documento: Excel, Word, PDF, etc.
        </p>
      </div>
    </div>
  );
};

export default FileUpload;
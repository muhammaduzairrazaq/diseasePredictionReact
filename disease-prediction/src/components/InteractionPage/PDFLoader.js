import React, { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import "pdfjs-dist/build/pdf.worker.min.mjs";


const PdfReader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pdfText, setPdfText] = useState('');
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setError(null); // Clear previous errors
    } else {
      setSelectedFile(null);
      setPdfText(''); // Clear previous text
      setError('Please upload a valid PDF file.');
    }
  };

  const handleReadPdf = async () => {
    if (!selectedFile) {
      return; // No file selected
    }

    setIsLoading(true);
    try {
      const fileReader = new FileReader();
      fileReader.onload = async () => {
        const typedarray = new Uint8Array(fileReader.result);
        const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
        let text = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          textContent.items.forEach((item) => {
            text += item.str + ' ';
          });
        }
        setPdfText(text.trim()); // Remove trailing whitespace
      };
      fileReader.readAsArrayBuffer(selectedFile);
    } catch (error) {
      console.error('Error processing PDF:', error);
      setError('An error occurred while reading the PDF.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" text="Upload Report" onChange={handleFileChange} />
      {error && <p className="error">{error}</p>}
      {isLoading && <p>Loading...</p>}
      <button onClick={handleReadPdf} disabled={!selectedFile}>
        Read PDF
      </button>
      {pdfText && (
        <button onClick={() => alert(pdfText)}>Show Text in Alert</button>
      )}
    </div>
  );
};

export default PdfReader;

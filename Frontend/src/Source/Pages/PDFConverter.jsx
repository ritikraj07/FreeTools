import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import Notify from '../Components/Notify';

function ImageToPdfConverter() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const convertToPdf = async () => {
        if (!selectedFile) {
            setMessage('Please select an image file.');
            setTimeout(() => {
                setMessage('');
            }, 6500);

            return;
        }

        try {
            const reader = new FileReader();
            reader.onload = async () => {
                const imageBytes = new Uint8Array(reader.result);
                const pdfDoc = await PDFDocument.create();
                const image = await pdfDoc.embedJpg(imageBytes);
                const page = pdfDoc.addPage();
                const { width, height } = page.getSize();
                page.drawImage(image, {
                    x: 20,
                    y: 20,
                    width: width - 40,
                    height: height - 40,
                });

                const pdfBytes = await pdfDoc.save();
                const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
                const pdfUrl = URL.createObjectURL(pdfBlob);
                window.open(pdfUrl);
            };

            reader.readAsArrayBuffer(selectedFile);
        } catch (error) {
            console.error('Error converting image to PDF:', error);
        }
    };

    return (
        <div>
            {message.length > 0 && Notify(message)}
            <h2>Image to PDF Converter</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={convertToPdf}>Convert to PDF</button>
        </div>
    );
}

export default ImageToPdfConverter;

import React, { useState, useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import Notify from '../Components/Notify';
import '../Styles/PDFConverter.css'

function ImageToPdfConverter() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

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
        let fileType = selectedFile.name.split('.').pop()
       

        try {
            const reader = new FileReader();
            reader.onload = async () => {
                const imageBytes = new Uint8Array(reader.result);
                const pdfDoc = await PDFDocument.create();
                let image;

                if (fileType === 'jpg' || fileType === 'jpeg') {
                    image = await pdfDoc.embedJpg(imageBytes);
                } else if (fileType === 'png') {
                    image = await pdfDoc.embedPng(imageBytes);
                } else if (fileType === 'pdf') {
                    image = await pdfDoc.embedPdf(imageBytes);
                } else if (fileType === 'page') {
                    image = await pdfDoc.embedPage(imageBytes);
                } else {
                    setMessage('Please select an image file');
                    setTimeout(() => {
                        setMessage('');
                    }, 6500);

                    return;
                }

                const page = pdfDoc.addPage();
                const { width, height } = page.getSize();
                const aspectRatio = image.width / image.height;
                let imageWidth, imageHeight;

                if (width / height > aspectRatio) {
                    imageWidth = height * aspectRatio;
                    imageHeight = height;
                } else {
                    imageWidth = width;
                    imageHeight = width / aspectRatio;
                }

                const x = (width - imageWidth) / 2;
                const y = (height - imageHeight) / 2;

                page.drawImage(image, {
                    x,
                    y,
                    width: imageWidth,
                    height: imageHeight,
                });

                const pdfBytes = await pdfDoc.save();
                const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
                const pdfUrl = URL.createObjectURL(pdfBlob);
                window.open(pdfUrl);
            };

            reader.readAsArrayBuffer(selectedFile);

        } catch (error) {
            // console.error('Error converting image to PDF:', error);
            setMessage('Error converting image to PDF:');
            setTimeout(() => {
                setMessage('');
            }, 6500);

            return;
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);
        setSelectedFile(event.dataTransfer.files[0]);
    };

    const handleBrowseClick = () => {
        fileInputRef.current.click();
    };


    return (
        <div
            className={`converter-container ${isDragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
           
        >
            {message.length > 0 && Notify(message)}
            <h2>Image to PDF Converter</h2>
            <div className="file-drop-area" onClick={handleBrowseClick} >
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    style={{display:'none'}}
                />
                <p className="drop-text" onClick={handleBrowseClick}>
                    {selectedFile ? selectedFile.name : 'Click to browse or drag and drop image file'}
                </p>
            </div>
            <button onClick={convertToPdf} disabled={!selectedFile}>
                Convert to PDF
            </button>
        </div>
    );
}

export default ImageToPdfConverter;

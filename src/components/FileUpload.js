import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function FileUpload() {

    const [file, setFile] = useState(null);

    const studentId = useSelector(state => state.user.userId); // Access studentId from Redux state


    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            alert('Please select a file to upload');
            return;
        }


        const formData = new FormData();
        formData.append('file', file);
        formData.append('studentId', studentId);

        try {
            const response = await fetch('http://localhost:3001/upload', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            if (response.status === 201) {
                alert('File uploaded successfully: ' + result.filename);

            } else {
                throw new Error(result.message || 'Failed to upload file');

            } 
            }catch (error) {
                alert('Upload error: ' + error.message);
            }
        };


        return (
            <div className='file-upload'>
                <form onSubmit={handleSubmit}>
                    <input type='file' onChange={handleFileChange}></input>
                    <button type='submit'>Upload File</button>
                </form>
            </div>
        );
    };

export default FileUpload;
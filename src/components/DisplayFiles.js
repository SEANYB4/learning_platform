import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function DisplayFiles() {

    const [files, setFiles] = useState([]);
    const [error, setError] = useState('');

    const userId = useSelector(state => state.user.userId);

    useEffect(() => {

        const fetchFiles = async () => {

            try {

                const response = await fetch(`http://localhost:3001/files/${userId}`)
                
                if (!response.ok) {

                    throw new Error('Failed to fetch files.');
                }
                    const data = await response.json();
                    setFiles(data);
                } catch (error) {

                    setError(error.message);
                }
        };

        if (userId) {
            fetchFiles();
        }

    }, [userId]);
    
    return (
        <div>
            <h1>Files List</h1>
            {error && <p>Error: {error}</p>}
            <ul>
                {files.map(file => (
                    <li key={file._id}>
                        {file.filename} - {file.contentType}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayFiles;

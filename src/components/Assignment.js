import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";




function Assignment() {

    const [assignments, setAssignments] = useState([]);
    const [error, setError] = useState('');

    // const assignments = useSelector(state => state.assignments);

    const userId = useSelector(state => state.user.userId);


    useEffect(() => {

        const fetchAssignments = async () => {

            try {

                const response = await fetch(`http://localhost:3001/assignments/${userId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch assignments');
                }

                const data = await response.json();
                setAssignments(data);
                
            } catch (error) {

                setError(error.message);
            }
        }

        fetchAssignments();
    }, [userId]);  

    return (

        <div>

            <h1>Current Assignments</h1>

            <ul>
                {assignments.map((assignment, index) => (
                    <li key={index}>
                        {assignment.title} - {assignment.dueDate}
                    </li>
                ))}
            </ul>
            
        </div>
    );

}



export default Assignment;
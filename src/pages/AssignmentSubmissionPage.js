import React, { useState } from "react";
import { connect } from 'react-redux';
import { submitAssignment } from "../store/actions/assignmentActions";

function AssignmentSubmissionPage({ assignmentId, submitAssignment }) {

    const [submission, setSubmission] = useState('');

    const handleSubmit = (e) => {


        e.preventDefault();
        submitAssignment(assignmentId, { content: submission });

    };

    return (


        <form onSubmit={handleSubmit}>
            <textArea value={submission} onChange={e => setSubmission(e.target.value)} />
            <button type="submit">Submit Assignment</button>
        </form>
    );
}

export default connect(null, { submitAssignment })(AssignmentSubmissionPage);

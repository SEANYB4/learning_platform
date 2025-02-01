import React from "react";
import { connect } from "react-redux";
import { enrollInCourse } from "../store/actions/courseActions";

function CourseDetailsPage({ course, enrollInCourse}) {

    const handleEnroll = () => {
        enrollInCourse(course.id);
    }

    return (

        <div>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <button onClick={handleEnroll}>Enroll</button>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    const course = state.courses.find(c => c.id === ownProps.match.params.id);
    return { course };
};

export default connect(mapStateToProps, { enrollInCourse })(CourseDetailsPage);



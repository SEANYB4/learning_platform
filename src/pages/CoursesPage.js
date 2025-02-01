import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchCourses } from '../store/actions/courseActions';





function CoursesPage({ courses, loading, error, fetchCourses }) {

    useEffect(() => {

        fetchCourses();

    }, [fetchCourses]);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
    
        <div>
            <h1> Courses</h1>
            {courses.map(course => (
                <div key={course.id}>{course.title}</div>
            ))}
        </div>
        );
}


const mapStateToProps = (state) => ({

    courses: state.courses.courses,
    loading: state.courses.loading,
    error: state.courses.error
});


const mapDispatchToProps = {
    fetchCourses
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
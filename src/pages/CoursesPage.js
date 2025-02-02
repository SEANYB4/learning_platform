import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchCourses } from '../store/actions/courseActions';


import CourseDetailsPage from './CourseDetailsPage';
import Header from "../components/Header";



function CoursesPage({ courses, loading, error, fetchCourses }) {

    useEffect(() => {

        fetchCourses();

    }, [fetchCourses]);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
    
        <div>

            <Header></Header>
            <h1> Courses</h1>
            {courses.map((course, index) => (
                <div key={index}>{course.title}</div>
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
import React, { createContext, useEffect, useState } from 'react';

export const CourseContext = createContext();

const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);
    
	const [selectedCourse, setSelectedCourse] = useState([]);
	
	const [rightSideCourse,setRightSideCourse] = useState([])

	const handleRightSideCourse = (courseSelected) => {
		console.log(courseSelected);
	}

	const handleSelectedCourse = (choosedCourse) => {
		console.log(choosedCourse);
		setSelectedCourse(choosedCourse);
	};

	useEffect(() => {
		fetch('https://epic-coding-server.vercel.app/courses')
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);

	const courseInfo = { courses,handleSelectedCourse,selectedCourse,handleRightSideCourse };

	return <CourseContext.Provider value={courseInfo}>{children}</CourseContext.Provider>;
};

export default CourseProvider;

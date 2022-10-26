import React, { createContext, useEffect, useState } from 'react';

export const CourseContext = createContext();

const CourseProvider = ({ children }) => {
	const [courses, setCourses] = useState([]);

	const [selectedCourse, setSelectedCourse] = useState([]);

	useEffect(() => {
		const data = localStorage.getItem('COURSE');
		console.log(data);
		setSelectedCourse(JSON.parse(data));
	}, []);

	// useEffect(() => {
	// 	localStorage.setItem('COURSE', JSON.stringify(selectedCourse));
	// }, [selectedCourse]);

	const handleSelectedCourse = (choosedCourse) => {
		console.log(choosedCourse);
		setSelectedCourse(choosedCourse);
		localStorage.setItem('COURSE', JSON.stringify(choosedCourse));
	};

	useEffect(() => {
		fetch('https://epic-coding-server.vercel.app/courses')
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);

	const courseInfo = { courses, handleSelectedCourse, selectedCourse,setSelectedCourse };

	return <CourseContext.Provider value={courseInfo}>{children}</CourseContext.Provider>;
};

export default CourseProvider;

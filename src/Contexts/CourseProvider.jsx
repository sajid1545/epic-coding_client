import React, { createContext, useEffect, useState } from 'react';
import LargeLoader from '../Components/Spinners/LargeLoader';

export const CourseContext = createContext();

const CourseProvider = ({ children }) => {
	const [courses, setCourses] = useState([]);

	const [selectedCourse, setSelectedCourse] = useState([]);

	const [load, setLoad] = useState(false);

	useEffect(() => {
		const data = localStorage.getItem('COURSE');
		setSelectedCourse(JSON.parse(data));
	}, []);

	const handleSelectedCourse = (choosedCourse) => {
		setSelectedCourse(choosedCourse);
		localStorage.setItem('COURSE', JSON.stringify(choosedCourse));
	};

	useEffect(() => {
		setLoad(true);
		fetch('https://epic-coding-server.vercel.app/courses')
			.then((res) => res.json())
			.then((data) => {
				setCourses(data);
				setLoad(false);
			});
	}, []);

	if (load) {
		return <LargeLoader/>;
	}

	const courseInfo = { courses, handleSelectedCourse, selectedCourse, setSelectedCourse };

	return <CourseContext.Provider value={courseInfo}>{children}</CourseContext.Provider>;
};

export default CourseProvider;

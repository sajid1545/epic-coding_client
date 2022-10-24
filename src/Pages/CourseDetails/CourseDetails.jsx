import React, { useContext } from 'react';
import { CourseContext } from './../../Contexts/CourseProvider';

const CourseDetails = () => {
	const { selectedCourse } = useContext(CourseContext);

	const { title, picture, ratings, about } = selectedCourse;

	return (
		<div>
            <h1>{ title }</h1>
		</div>
	);
};

export default CourseDetails;

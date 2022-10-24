import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';

const Courses = () => {
	const courses = useLoaderData();

	const [selectedCourse, setSelectedCourse] = useState([]);

	// const handlSelectedCourse = (selectedCourse) => {

	// }

	return (
		<div className="grid grid-cols-12 gap-5 mt-5">


			<div className="right-side lg:col-span-4 col-span-12">
				{courses.map((course) => (
					<RightSideNav key={course.id} course = {course} />
				))}
			</div>

			<div className="left-side lg:col-span-8 col-span-12">
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
					{courses.map((course) => (
						<LeftSideNav key={course.id} course = {course} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Courses;

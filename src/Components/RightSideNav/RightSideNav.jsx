import React from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = ({ course, handleSelectedCourse }) => {
	return (
		<div>
			<Link to={`/courses/${course.id}`}>
				<button
					onClick={() => handleSelectedCourse(course)}
					className="px-8 py-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  duration-500 text-white hover:shadow-lg hover:shadow-purple-600  mb-4 rounded-md text-lg shadow-purple-600 font-bold ">
					{course.title}
				</button>
			</Link>
		</div>
	);
};

export default RightSideNav;

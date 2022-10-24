import React from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = ({ course, handleSelectedCourse }) => {
	return (
		<div>
			<Link to={`/courses/${course.id}`}>
				<button
					onClick={() => handleSelectedCourse(course)}
					className="px-8 py-2 bg-purple-100 hover:bg-purple-500 duration-500 hover:text-white  mb-4 rounded-xl text-lg shadow-md font-bold shadow-purple-500">
					{course.title}
				</button>
			</Link>
		</div>
	);
};

export default RightSideNav;

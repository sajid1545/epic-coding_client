import React from 'react';
import { Link } from 'react-router-dom';

const LeftNav = ({ course, handleSelectedCourse }) => {
	return (
		<div className="hover:scale-110 duration-500  rounded-xl mb-10">
			<Link to={`/courses/${course.id}`}>
				<button
					onClick={() => handleSelectedCourse(course)}
					className=" p-2 bg-[#AA96DA] border-2 border-purple-700  duration-500  hover:shadow-lg  mb-4 rounded-md text-sm lg:text-lg shadow-purple-600 font-bold ">
					{course.title}
				</button>
			</Link>
		</div>
	);
};

export default LeftNav;

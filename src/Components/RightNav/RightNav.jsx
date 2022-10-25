import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RightNav = ({ course,handleSelectedCourse }) => {
	const { title, picture, ratings, about, id } = course;

	return (
		<div>
			<div className="max-w-sm mx-auto h-full  shadow-lg shadow-purple-400 bg-gray-900 text-gray-100 rounded-xl border-4 border-purple-800">
				<img
					src={picture}
					alt="topics"
					className="object-cover object-center w-full rounded-t-md h-[300px] p-4 bg-gray-500"
				/>
				<div className="flex flex-col justify-between p-6 space-y-8">
					<div className="space-y-2">
						<h2 className="text-3xl font-semibold ">{title}</h2>
						<p className="text-gray-100">{about}</p>
					</div>
					<div className="flex items-center gap-2 justify-center">
						<FaStar className="text-xl text-yellow-500" /> <span>{ratings}</span>
					</div>
					<Link to={`/courses/:${id}`}>
						<button
							onClick={() => handleSelectedCourse(course)}
							type="button"
							className="flex items-center justify-center w-full p-3 font-semibold  rounded-md bg-violet-400 hover:bg-violet-600 duration-500 text-gray-900">
							More Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RightNav;

import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { CourseContext } from './../../Contexts/CourseProvider';

const CheckOutCourse = () => {
	const { selectedCourse } = useContext(CourseContext);
	const { title, picture, ratings, about, price, instructor, id } = selectedCourse;

	const handleSuccesMeassage = () => {
		Swal.fire(
			'Congratulations 🎉🎉 ',
			`You have finally enrolled in ${selectedCourse.title}`,
			'success'
		);
	};

	return (
		<div className="space-y-6">
			<h1 className="text-xl font-bold">Course Id :{id}</h1>
			<h1 className="text-4xl font-bold">{title}</h1>
			<img src={picture} alt="" className="w-[30%] mx-auto" />
			<button
				type="button"
				onClick={handleSuccesMeassage}
				className="py-3 px-12 mt-5 bg-violet-600 hover:bg-violet-800 focus:ring-violet-500 focus:ring-offset-violet-200 text-white  transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg flex justify-center items-center gap-5 mx-auto text-xl ">
				Procced
			</button>
		</div>
	);
};

export default CheckOutCourse;

import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
		<div className="space-y-6 mb-10 bg-gradient-to-r from-gray-800 via-slate-900 to-black p-10 text-white">
			{selectedCourse.length === 0 ? (
				<>
					<div
						class="w-[50%] mx-auto bg-red-200 border-red-600 text-red-600 border-l-4 p-4"
						role="alert">
						<p class="font-bold">
							Select a{' '}
							<Link className="text-blue-700 underline " to={'/courses'}>
								Course
							</Link>{' '}
							before Proceeding
						</p>
					</div>
				</>
			) : (
				<div className="mt-10 space-y-5	">
					<h1 className="text-4xl font-bold mb-5">{title}</h1>

					<h1 className="text-xl font-bold">Course Id :{id}</h1>
					<h1 className="text-xl font-bold">
						Your Instructor : <span className="font-extrabold text-green-600">{instructor}</span>
					</h1>
					<div className="flex justify-center gap-2">
						<div>
							<FaStar className="h-6 w-6 mx-auto text-yellow-500" />
						</div>
						<span className="text-lg">{ratings}</span>
					</div>
					<img
						src={picture}
						alt=""
						className="w-[30%] mx-auto rounded-lg shadow-xl shadow-purple-800 cursor-pointer"
					/>
					<button
						type="button"
						onClick={handleSuccesMeassage}
						className="btn-wide py-3  mt-5 bg-violet-600 hover:bg-violet-800 focus:ring-violet-500 focus:ring-offset-violet-200 text-white  transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg flex justify-center items-center gap-5 mx-auto text-xl ">
						Proceed
					</button>
				</div>
			)}
		</div>
	);
};

export default CheckOutCourse;

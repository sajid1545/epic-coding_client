import React, { useContext } from 'react';
import { FaChessKnight, FaDownload, FaOpencart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CourseContext } from './../../Contexts/CourseProvider';

const CourseDetails = () => {
	const { selectedCourse } = useContext(CourseContext);

	const { title, picture, ratings, about, overview1, overview2, overview3 } = selectedCourse;

	return (
		<div>
			<div className="max-w-xl mx-auto p-8 rounded-xl shadow-md dark:bg-gray-900 dark:text-gray-100 my-10">
				<div className="flex justify-between pb-4 border-bottom">
					<div className="flex items-center">
						<h1 className="mb-0 capitalize dark:text-gray-100">Photography</h1>
					</div>
					<button>
						<FaDownload />
					</button>
				</div>
				<div className="space-y-4">
					<div className="space-y-2">
						<img
							src={picture}
							alt=""
							className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
						/>
					</div>
					<div className="space-y-2">
						<h3 className="text-xl font-semibold dark:text-violet-400">{title}</h3>
						<p className="leading-snug dark:text-gray-400">{about}</p>
					</div>

					<div>
						<div className="px-4 py-5 border-b rounded-t sm:px-6">
							<div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
								<ul className="divide-y divide-gray-200  ">
									<li>
										<div className="block hover:bg-gray-50 dark:hover:bg-gray-900">
											<div className="px-4 py-4 sm:px-6 ">
												<div className="flex items-center justify-between">
													<p className="text-md text-gray-700 dark:text-white ">{overview1}</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="block hover:bg-gray-50 dark:hover:bg-gray-900">
											<div className="px-4 py-4 sm:px-6">
												<div className="flex items-center justify-between">
													<p className="text-md text-gray-700 dark:text-white ">{overview2}</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="block hover:bg-gray-50 dark:hover:bg-gray-900">
											<div className="px-4 py-4 sm:px-6">
												<div className="flex items-center justify-between">
													<p className="text-md text-gray-700 dark:text-white ">{overview3}</p>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<Link to={'/checkOut'}>
							<button
								type="button"
								className="py-3 px-12 mt-5 bg-violet-600 hover:bg-violet-800 focus:ring-violet-500 focus:ring-offset-violet-200 text-white  transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg flex justify-center items-center gap-5 mx-auto text-xl ">
								Get premium access
								<FaChessKnight />
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseDetails;

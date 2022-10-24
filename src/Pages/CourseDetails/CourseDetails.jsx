import React, { useContext } from 'react';
import { FaDownload } from 'react-icons/fa';
import { CourseContext } from './../../Contexts/CourseProvider';

const CourseDetails = () => {
	const { selectedCourse } = useContext(CourseContext);

	const { title, picture, ratings, about,overview1,overview2,overview3 } = selectedCourse;

	return (
		<div>
			<div className="max-w-xl mx-auto p-8 rounded-xl shadow-md dark:bg-gray-900 dark:text-gray-100">
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
						<div class="px-4 py-5 border-b rounded-t sm:px-6">
							<div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
								<ul class="divide-y divide-gray-200">
									<li>
										<div class="block hover:bg-gray-50 dark:hover:bg-gray-900">
											<div class="px-4 py-4 sm:px-6">
												<div class="flex items-center justify-between">
													<p class="text-md text-gray-700 dark:text-white ">
														{overview1}
													</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div class="block hover:bg-gray-50 dark:hover:bg-gray-900">
											<div class="px-4 py-4 sm:px-6">
												<div class="flex items-center justify-between">
													<p class="text-md text-gray-700 dark:text-white ">
                                                    {overview2}
													</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div class="block hover:bg-gray-50 dark:hover:bg-gray-900">
											<div class="px-4 py-4 sm:px-6">
												<div class="flex items-center justify-between">
													<p class="text-md text-gray-700 dark:text-white ">
                                                    {overview3}
													</p>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseDetails;

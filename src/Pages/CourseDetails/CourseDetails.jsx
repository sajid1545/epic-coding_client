import React, { useContext } from 'react';
import { FaChessKnight, FaDownload, FaOpencart, FaStar, FaStarHalf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CourseContext } from './../../Contexts/CourseProvider';
import Pdf from 'react-to-pdf';
import ReactImageMagnify from 'react-image-magnify';

const CourseDetails = () => {
	const { selectedCourse } = useContext(CourseContext);

	const ref = React.createRef();

	const {
		title,
		picture,
		ratings,
		about,
		overview1,
		overview2,
		overview3,
		price,
		instructor,
		topic,
		id,
	} = selectedCourse;

	return (
		<div>
			{selectedCourse.length !== 0 ? (
				<div className="max-w-xl mx-auto p-8 rounded-xl shadow-md dark:bg-gray-900 dark:text-gray-100 my-10">
					<div className="flex justify-between pb-4 border-bottom">
						<div className="flex items-center">
							<span className="px-4 py-1  text-base rounded-full text-purple-900 border border-purple-600 bg-purple-200 ">
								{topic}
							</span>
						</div>

						<Pdf targetRef={ref} filename="course-details.pdf">
							{({ toPdf }) => (
								<button className="tooltip tooltip-secondary" data-tip="Download" onClick={toPdf}>
									<FaDownload />
								</button>
							)}
						</Pdf>
					</div>
					<div ref={ref} className="space-y-7 ">
						<div>
							<ReactImageMagnify
								{...{
									smallImage: {
										alt: 'courses',
										isFluidWidth: true,
										src: `${picture}`,
									},
									largeImage: {
										src: `${picture}`,
										width: 1200,
										height: 1800,
									},
								}}
							/>
						</div>
						<div className="space-y-2">
							<h3 className="text-xl font-semibold dark:text-violet-400">{title}</h3>

							<p className="leading-snug  dark:text-gray-400">{about}</p>
							<div className="">
								<h1 className="text-xl mt-3">
									Instructor : <span className="text-green-600">{instructor}</span>
								</h1>
							</div>
							<div className="flex justify-center gap-5 flex-col">
								<h3 className="text-xl   font-semibold dark:text-violet-400">Price : ${price}</h3>
								<div className="flex items-center gap-2 justify-center">
									{ratings > 4 ? (
										<div
											data-tip={`${ratings}`}
											className="tooltip flex items-center gap-2 justify-center">
											<FaStar className="text-xl text-yellow-500" />
											<FaStar className="text-xl text-yellow-500" />
											<FaStar className="text-xl text-yellow-500" />
											<FaStar className="text-xl text-yellow-500" />
											<FaStar className="text-xl text-yellow-500" />
										</div>
									) : (
										<div
											data-tip={`${ratings}`}
											className="tooltip flex items-center gap-2 justify-center">
											<FaStar className="text-xl text-yellow-500" />
											<FaStar className="text-xl text-yellow-500" />
											<FaStar className="text-xl text-yellow-500" />
											<FaStar className="text-xl text-yellow-500" />
										</div>
									)}
								</div>
							</div>
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
							<Link to={`/checkOut/${id}`}>
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
			) : (
				<div>
					<section class="bg-[#F1F1F1]">
						<div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
							<div class="mx-auto max-w-xl text-center">
								<h1 class="text-3xl font-extrabold sm:text-5xl">
									<div role="alert" class="rounded border-l-4 border-red-500 bg-red-50 p-4">
										<div class="flex items-center gap-2 text-red-700">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="currentColor"
												class="h-[100px] w-[100px]">
												<path
													fill-rule="evenodd"
													d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
													clip-rule="evenodd"
												/>
											</svg>

											<strong class="block font-medium"> You have not selected a course yet</strong>
										</div>
									</div>
								</h1>

								<p class="mt-4 sm:text-xl sm:leading-relaxed">
									Please select a course first to proceed
								</p>

								<div class="mt-8 flex flex-wrap justify-center gap-4">
									<Link
										to="/courses"
										class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 duration-500 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
										href="/get-started">
										Select Course
									</Link>
								</div>
							</div>
						</div>
					</section>
				</div>
			)}
		</div>
	);
};

export default CourseDetails;

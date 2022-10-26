import React, { useContext, useEffect } from 'react';
import { FaChessKnight, FaDownload, FaStar} from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { CourseContext } from './../../Contexts/CourseProvider';
import Pdf from 'react-to-pdf';
import ReactImageMagnify from 'react-image-magnify';

const CourseDetails = () => {
	const { selectedCourse, setSelectedCourse } = useContext(CourseContext);

	useEffect(() => {
		const data = localStorage.getItem('COURSE');
		setSelectedCourse(JSON.parse(data));
	}, []);

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
		</div>
	);
};

export default CourseDetails;

import React from 'react';
import { Link } from 'react-router-dom';
import OurServices from '../../Components/OurServices/OurServices';

const Home = () => {
	return (
		<div className="">
			<div className="px-0 py-36 mx-auto w-full md:px-24 lg:px-10  lg:py-24 bg-[#111827]">
				<div className="max-w-xl sm:mx-auto lg:max-w-2xl py-12">
					<div className="flex flex-col mb-16 sm:text-center sm:mb-0">
						<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
							<h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent sm:text-5xl">
								<span className="text-6xl font-mono">Learn Anything, On Your Schedule</span>
							</h2>
						</div>
						<div className=" md:flex gap-5 justify-center space-y-5 md:space-y-0">
							<div>
								<Link to={'courses'}>
									<button className="btn-wide border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto rounded-lg duration-500">
										Check Our Available Courses
									</button>
								</Link>
							</div>
							<div>
								<Link to={'register'}>
									<button className="btn-wide border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto rounded-lg duration-500">
										Sign Up
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<OurServices />
		</div>
	);
};

export default Home;

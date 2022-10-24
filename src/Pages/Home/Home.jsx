import React from 'react';
import { Link } from 'react-router-dom';
import OurServices from '../../Components/OurServices/OurServices';

const Home = () => {
	return (
		<div className="">
			<div className="px-4 py-16 mx-auto  md:px-24 lg:px-10  lg:py-20 bg-[#E5E5E5]">
				<div className="max-w-xl sm:mx-auto lg:max-w-2xl">
					<div className="flex flex-col mb-16 sm:text-center sm:mb-0">
						<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
							<h2 className="max-w-lg mb-6 font-sans  font-bold  text-gray-900 sm:text-4xl md:mx-auto">
								<span className="text-6xl font-mono">Learn Anything, On Your Schedule</span>
							</h2>
						</div>
						<div>
							<Link to={'register'}>
								<button className="btn-wide inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 text-white focus:shadow-outline focus:outline-none">
									Sign Up
								</button>
							</Link>
						</div>
					</div>
				</div>
            </div>
            <OurServices/>
		</div>
	);
};

export default Home;

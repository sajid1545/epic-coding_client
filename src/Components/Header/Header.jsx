import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
// import './header.css'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(true);

	function toggleDarkMode() {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	}

	return (
		<div>
			<div className="px-4 py-5 mx-auto  md:px-24 lg:px-10">
				<div className="relative flex items-center justify-between">
					<a href="/" aria-label="Company" title="Company" className="inline-flex items-center">
						<img src={logo} alt="" className="w-10 h-10 rounded-full" />
						<span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
							Epic! Coding
						</span>
					</a>
					<ul className=" items-center hidden space-x-8 lg:flex">
						<li>
							
								<NavLink
									className={({ isActive }) => (isActive ? 'active' : undefined)}
									to={`/courses`}>
									Courses
								</NavLink>
							
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'active' : undefined)}
								to={`/`}>
								FAQ
							</NavLink>
						</li>
						<li>
							<NavLink
								to=""
								title="Blog"
								className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400">
								Blog
							</NavLink>
						</li>

						<li onClick={toggleDarkMode} className="cursor-pointer text-xl">
							{darkMode ? <FaSun /> : <FaMoon />}
						</li>

						<li>
							<button
								className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
								aria-label="Login"
								title="Login">
								Sign In
							</button>
						</li>
					</ul>
					<div className="lg:hidden">
						<button
							aria-label="Open Menu"
							title="Open Menu"
							className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
							onClick={() => setIsMenuOpen(true)}>
							<FaBars className="w-7 h-6 text-gray-600" />
						</button>
						{isMenuOpen && (
							<div className="absolute top-0 left-0 w-full">
								<div className="p-5 bg-white border rounded shadow-sm">
									<div className="flex items-center justify-between mb-4">
										<div>
											<a
												href="/"
												aria-label="Company"
												title="Company"
												className="inline-flex items-center">
												<img src={logo} alt="" className="w-10 h-10 rounded-full" />
												<span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
													Epic! Coding
												</span>
											</a>
										</div>
										<div>
											<button
												aria-label="Close Menu"
												title="Close Menu"
												className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
												onClick={() => setIsMenuOpen(false)}>
												<FaTimes className="w-6 h-6 text-gray-600" />
											</button>
										</div>
									</div>
									<nav>
										<ul className="space-y-4">
											<li>
												<a
													href="/"
													aria-label="Our product"
													title="Our product"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
													Product
												</a>
											</li>
											<li>
												<a
													href="/"
													aria-label="Our product"
													title="Our product"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
													Features
												</a>
											</li>
											<li>
												<a
													href="/"
													aria-label="Product pricing"
													title="Product pricing"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
													Pricing
												</a>
											</li>
											<li>
												<a
													href="/"
													aria-label="About us"
													title="About us"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
													About us
												</a>
											</li>
											<li>
												<a
													href="/"
													className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
													aria-label="Sign up"
													title="Sign up">
													Sign up
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;

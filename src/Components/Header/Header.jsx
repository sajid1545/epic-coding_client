import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { FaBars, FaMoon, FaSun, FaTimes, FaUserAlt } from 'react-icons/fa';
import './header.css';
import { AuthContext } from './../../Contexts/UserContextProvider';

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(true);

	function toggleDarkMode() {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	}

	return (
		<div className="mb-[210px] lg:mb-2 ">
			<div className="px-4 py-5 mx-auto  md:px-24 lg:px-10">
				<div className="relative flex items-center justify-between">
					<Link to="/" className="inline-flex items-center">
						<img src={logo} alt="" className="w-10 h-10 rounded-full" />
						<span className="text-2xl font-extrabold ml-5 text-slate-800 uppercase italic">
							Epic! Coding
						</span>
					</Link>
					<ul className=" items-center hidden space-x-8 lg:flex">
						<li>
							<NavLink
								className={`font-medium ${(isActive) => (isActive ? 'text-red-600' : undefined)}`}
								to={`/courses`}>
								Courses
							</NavLink>
						</li>

						<li>
							<NavLink to={'/FAQ'} className="font-medium ">
								FAQ
							</NavLink>
						</li>
						<li>
							<NavLink to="/blogs" title="Blog" className="font-medium ">
								Blog
							</NavLink>
						</li>

						<li onClick={toggleDarkMode} className="cursor-pointer text-xl">
							{darkMode ? <FaSun /> : <FaMoon />}
						</li>

						<li>
							{user?.uid ? (
								<Link>
									<button
										onClick={logOut}
										className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
										title="Log Out">
										Log Out
									</button>
								</Link>
							) : (
								<Link to={'/login'}>
									<button
										className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
										title="Login">
										Login
									</button>
								</Link>
							)}
						</li>

						<li>
							<Link>
								{user?.photoURL ? (
									<div className="tooltip tooltip-bottom tooltip-info" data-tip={user?.displayName}>
										<div className="avatar online w-12 h-12">
											<img src={user.photoURL} alt="" className=" rounded-full " />
										</div>
									</div>
								) : (
									<FaUserAlt className="w-6 h-6" />
								)}
							</Link>
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
											<Link to="/" className="inline-flex items-center">
												<img src={logo} alt="" className="w-10 h-10 rounded-full" />
												<span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
													Epic! Coding
												</span>
											</Link>
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
												<NavLink
													className={`font-medium ${(isActive) =>
														isActive ? 'text-red-600' : undefined}`}
													to={`/courses`}>
													Courses
												</NavLink>
											</li>

											<li>
												<NavLink to={'/FAQ'} className="font-medium ">
													FAQ
												</NavLink>
											</li>
											<li>
												<NavLink to="/blogs" title="Blog" className="font-medium ">
													Blog
												</NavLink>
											</li>

											<li>
												{user?.uid ? (
													<Link>
														<button
															onClick={logOut}
															className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
															title="Register">
															Log Out
														</button>
													</Link>
												) : (
													<Link to={'login'}>
														<button
															className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
															title="Login">
															Login
														</button>
													</Link>
												)}
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

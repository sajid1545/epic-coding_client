import React from 'react';
import { FaFacebook, FaGoogle, FaLocationArrow, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Footer = () => {
	return (
		<div>
			<footer className="p-[7%] bg-gray-800 text-gray-400">
				<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
					<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
						<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-violet-400">
							<img src={logo} className="w-10 h-10 rounded-full text-gray-900" alt="" />
						</div>
						<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
							<li
								className="text-4xl tooltip tooltip-warning flex items-center gap-2 hover:text-blue-600 duration-500"
								data-tip="Click to see Location">
								<FaLocationArrow />
								<Link to={'/map'}>Location</Link>
							</li>
						</ul>
					</div>
					<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8 text-4xl">
						<li
							className="hover:text-yellow-600 duration-500 tooltip tooltip-warning"
							data-tip="Google">
							<a href="https://www.google.com/" target={`_blank`}>
								<FaGoogle />
							</a>
						</li>
						<li
							className="hover:text-blue-600 duration-500 tooltip tooltip-info"
							data-tip="Facebook">
							<a href="https://www.facebook.com/" target={`_blank`}>
								<FaFacebook />
							</a>
						</li>
						<li
							className="hover:text-blue-600 duration-500 tooltip tooltip-secondary"
							data-tip="Twitter">
							<a href="https://twitter.com/home?lang=en" target={`_blank`}>
								<FaTwitter />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default Footer;

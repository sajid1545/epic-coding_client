import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		let form = e.target;
		let name = form.name.value;
		let photoURL = form.photoURL.value;
		let email = form.email.value;
		let password = form.password.value;
		console.log(name, photoURL, email, password);
	};

	return (
		<div className="register-comp p-20 ">
			<div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
				<h1 className="text-2xl font-bold text-center">Register !!!</h1>
				<form onSubmit={handleSubmit} className="space-y-6 ng- ">
					<div className="space-y-1 text-sm">
						<label htmlFor="name" className="block dark:text-gray-400 text-left mb-1">
							Full Name
						</label>
						<input
							type="text"
							name="name"
							placeholder="Name"
							className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="photoURL" className="block dark:text-gray-400 text-left mb-1">
							PhotoURL
						</label>
						<input
							type="text"
							name="photoURL"
							placeholder="PhotoURL"
							className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="email" className="block dark:text-gray-400 text-left mb-1">
							Email
						</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="password" className="block dark:text-gray-400 text-left mb-1">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
					</div>
					<button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400 hover:bg-violet-700 duration-500 hover:text-white">
						Register
					</button>
				</form>
				<div className="flex items-center pt-4 space-x-1">
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
					<p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
				</div>
				<div className="flex justify-center space-x-4">
					<button className="p-3 rounded-sm">
						<FaGoogle className="w-5 h-5 fill-current" />
					</button>

					<button className="p-3 rounded-sm">
						<FaGithub className="w-5 h-5 fill-current" />
					</button>
				</div>
				<p className="text-xs text-center sm:px-6 dark:text-gray-400">
					Already have an account?
					<Link to={'/login'} className="underline dark:text-gray-100">
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;

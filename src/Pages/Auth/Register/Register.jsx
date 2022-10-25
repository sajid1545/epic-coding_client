import React, { useContext, useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Contexts/UserContextProvider';
import toast from 'react-hot-toast';

const Register = () => {
	const { createUser, updateUserProfile, githubSignIn, googleSignIn } = useContext(AuthContext);

	const [errors, setErrors] = useState({
		password: '',
		general: '',
	});

	// password validation
	const handlePasswordChange = (e) => {
		const password = e.target.value;
		if (password.length < 6) {
			setErrors({ ...errors, password: 'Must be at least 6 characters' });
		} else {
			setErrors('');
		}
	};

	// onsubmit, user will create account
	const handleSubmit = (e) => {
		e.preventDefault();
		let form = e.target;
		let name = form.name.value;
		let photoURL = form.photoURL.value;
		let email = form.email.value;
		let password = form.password.value;
		console.log(name, photoURL, email, password);

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				toast.success('Registered Successfully');
				form.reset();
				handleUpdateUserProfile(name, photoURL);
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.message);
			});
	};

	// Github signIn Authentication

	const handleGithubSignIn = (e) => {
		e.preventDefault();
		githubSignIn()
			.then((result) => {
				const user = result.user;
				console.log(user);
				toast.success('Success');
			})
			.catch((e) => {
				toast.error(e.message);
			});
	};

	// Google signIn Authentication

	const handleGoogleSignIn = (e) => {
		e.preventDefault();
		googleSignIn()
			.then((result) => {
				const user = result.user;
				console.log(user);
				toast.success('Success');
			})
			.catch((e) => {
				toast.error(e.message);
			});
	};

	// function to update user name and profile picture

	const handleUpdateUserProfile = (name, photoURL) => {
		const profile = {
			displayName: name,
			photoURL: photoURL,
		};

		updateUserProfile(profile)
			.then(() => {})
			.catch((err) => console.log(err));
	};

	return (
		<div className="register-comp p-10 md:p-20 ">
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
							required
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
							onChange={handlePasswordChange}
							required
							placeholder="Password"
							className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
					</div>
					{errors.password && <p className="text-red-600">{errors.password}</p>}
					<button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400 hover:bg-violet-700 duration-500 hover:text-white">
						Register
					</button>
					{errors.general && <p className="text-center text-red-600">{errors.general}</p>}
				</form>
				<div className="flex items-center pt-4 space-x-1">
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
					<p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
				</div>
				<div className="flex justify-center space-x-4">
					<button
						onClick={handleGoogleSignIn}
						className="p-3 rounded-sm hover:scale-125 duration-500">
						<FaGoogle className="w-7 h-7 fill-current" />
					</button>

					<button
						onClick={handleGithubSignIn}
						className="p-3 rounded-sm hover:scale-125 duration-500 ">
						<FaGithub className="w-7 h-7 fill-current" />
					</button>
				</div>
				<p className="text-xs text-center sm:px-6 dark:text-gray-400">
					Already have an account?
					<Link to={'/login'} className="underline dark:text-gray-100 ml-2">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;

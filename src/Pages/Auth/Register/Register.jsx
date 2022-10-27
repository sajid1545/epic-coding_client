import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/UserContextProvider';
import './register.css';

const Register = () => {
	const { createUser, updateUserProfile, githubSignIn, googleSignIn } = useContext(AuthContext);
	const [showPass, setShowPass] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const [errors, setErrors] = useState({
		password: '',
		general: '',
	});

	// password validation
	const handlePasswordChange = (e) => {
		const password = e.target.value;
		const noSymbol = !/[\!\@\#\$\%\^\&\*]{1,}/.test(password);
		if (password.length < 6) {
			setErrors({ ...errors, password: 'Must be at least 6 characters' });
		} else if (noSymbol) {
			setErrors({ ...errors, password: 'You must use atleast one special character' });
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
				navigate(from, { replace: true });
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.message);
				setErrors({ ...errors, general: err.message });
			});
	};

	const handleGithubSignIn = () => {
		githubSignIn()
			.then((result) => {
				console.log(result.user);
				toast.success('success');
				navigate(from, { replace: true });
			})
			.catch((e) => {
				toast.error(e.message);
			});
	};

	// Google signIn Authentication

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				console.log(result.user);
				navigate(from, { replace: true });
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

	// toggleShowPassword

	const togglePassword = (e) => {
		e.preventDefault();
		setShowPass(!showPass);
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
					<div className="space-y-1 text-sm relative">
						<label htmlFor="password" className="block dark:text-gray-400 text-left mb-1">
							Password
						</label>
						<input
							type={showPass ? 'text' : 'password'}
							name="password"
							onChange={handlePasswordChange}
							required
							placeholder="Password"
							className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
						<span
							className="absolute right-5 cursor-pointer top-10 text-xl text-white"
							onClick={togglePassword}>
							{showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
						</span>
					</div>
					{errors.password && <p className="text-red-600">{errors.password}</p>}
					<button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400 hover:bg-violet-700 duration-500 hover:text-white">
						Register
					</button>
					{errors.general && <p className="text-center text-red-600">{errors.general}</p>}
				</form>
				<hr className='border-2'></hr>
				<div className="my-6 space-y-4 ">
					<button
						onClick={handleGoogleSignIn}
						className="flex mt-10 items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-700 duration-500">
						<FaGoogle className="w-5 h-5 " />
						<p>SignIn with Google</p>
					</button>
					<button
						onClick={handleGithubSignIn}
						className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-700 duration-500">
						<FaGithub className="w-6 h-6 " />
						<p>SignIn with GitHub</p>
					</button>
				</div>

				<p className="text-xs text-center sm:px-6 dark:text-gray-400">
					Already have an account?
					<Link to="/login" className="underline dark:text-gray-100">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;

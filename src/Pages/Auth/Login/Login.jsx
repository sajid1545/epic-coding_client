import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { AuthContext } from './../../../Contexts/UserContextProvider';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
	const { signIn } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		let form = e.target;
		let email = form.email.value;
		let password = form.password.value;

		signIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset();
				toast.success('Success');
			})
			.catch((e) => console.log(e));
	};

	return (
		<div className="mb-5 login-comp p-10 md:p-20">
			<div className="w-full max-w-md mx-auto p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100 ">
				<h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
				<p className="text-sm text-center dark:text-gray-400 mb-5">
					Don't have account?
					<Link to={'/register'} className="focus:underline hover:underline ml-2">
						Sign up here
					</Link>
				</p>

				<form onSubmit={handleSubmit} className="space-y-8 ">
					<div className="space-y-4">
						<div className="space-y-2">
							<label htmlFor="email" className="block text-sm text-left">
								Email address
							</label>
							<input
								type="email"
								name="email"
								placeholder="Email"
								required
								className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
							/>
						</div>
						<div className="space-y-2">
							<div className="flex justify-between">
								<label htmlFor="password" className="text-sm">
									Password
								</label>
								<button className="text-xs hover:underline dark:text-gray-400">
									Forgot password?
								</button>
							</div>
							<input
								type="password"
								name="password"
								placeholder="Password"
								className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
							/>
						</div>
					</div>
					<button
						type="submit"
						className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
						Login
					</button>
					<div className="flex items-center w-full my-4">
						<hr className="w-full dark:text-gray-400" />
						<p className="px-3 dark:text-gray-400">OR</p>
						<hr className="w-full dark:text-gray-400" />
					</div>
					<div className="my-6 space-y-4">
						<button className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-700 duration-500">
							<FaGoogle className="w-5 h-5 " />
							<p>Login with Google</p>
						</button>
						<button className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-700 duration-500">
							<FaGithub className="w-6 h-6 " />
							<p>Login with GitHub</p>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;

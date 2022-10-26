import React, { useContext } from 'react';
import UserInfoModal from '../../Components/UserInfoModal/UserInfoModal';
import { AuthContext } from './../../Contexts/UserContextProvider';
import { FaUserAlt } from 'react-icons/fa';

const UserProfile = () => {
	const { user } = useContext(AuthContext);
	return (
        <div className='space-y-10'>
            <h1 className='text-5xl font-bold'>User Info</h1>
			<div className="justify-center  flex items-center flex-col">
				<div className="max-w-xl mx-auto  items-center p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100 rounded-lg shadow-lg shadow-purple-800">
					<div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
						{user?.photoURL ? (
							<img
								src={user?.photoURL}
								alt=""
								className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
							/>
						) : (
							<FaUserAlt className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
						)}
					</div>
					<div className="flex flex-col space-y-4">
						<div>
							<h2 className="text-2xl font-semibold uppercase">{user.displayName}</h2>
						</div>
						<div className="space-y-1">
							<span className="flex items-center space-x-2 text-xl my-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									aria-label="Email address"
									className="w-4 h-4">
									<path
										fill="currentColor"
										d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
								</svg>
								<span className="dark:text-gray-400">{user.email}</span>
							</span>

							<span className="text-left">
								{user.emailVerified ? (
									<p className="text-green-600 text-md font-bold"> ✔ Verfied</p>
								) : (
									<p className="text-md text-red-600 font-bold">❌ Not verified</p>
								)}
							</span>
						</div>
					</div>
				</div>
				<div>
					<UserInfoModal />
				</div>
			</div>
		</div>
	);
};

export default UserProfile;

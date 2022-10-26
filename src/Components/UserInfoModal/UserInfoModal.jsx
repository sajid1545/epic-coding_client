import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from './../../Contexts/UserContextProvider';
import { FaEdit } from 'react-icons/fa';

const UserInfoModal = () => {
	const { user, updateUserProfile } = useContext(AuthContext);

	const [userName, setUserName] = useState('');
	const [userPicture, setUserPicture] = useState('');

	const handleName = (e) => {
		let name = e.target.value;
		setUserName(name);
	};

	const handlePic = (e) => {
		let pic = e.target.value;
		setUserPicture(pic);
	};

	// update user profile
	const handleUpdateUserProfile = (e) => {
		let name = userName;
		let photoURL = userPicture;
		handleUpdateUser(name, photoURL);
		console.log(name, photoURL);
	};

	// handle update user
	const handleUpdateUser = (name, photoURL) => {
		const profile = {
			displayName: name,
			photoURL: photoURL,
		};

		updateUserProfile(profile)
			.then(() => {
				toast.success('Profile Updated Successfully');
				toast('Now Reload the page to see the changes', {
					icon: 'ℹ',
					style: {
						borderRadius: '10px',
						background: '#333',
						color: '#fff',
					},
				});
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="mt-5">
			<div className="flex gap-5 my-5">
				<label
					htmlFor="my-modal"
					className="btn btn-wide modal-button btn-primary hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 border-0 hover:scale-110 duration-300">
					<FaEdit className="mr-3 text-lg" />
					Edit Profile
				</label>
			</div>

			<input type="checkbox" id="my-modal" className="modal-toggle bg-red-500" />
			<div className="modal">
				<div className="modal-box space-y-5">
					<label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
						✕
					</label>
					<div className="text-left">
						<label htmlFor="name" className="text-sm ">
							Name
						</label>
						<input
							type="text"
							name="name"
							required
							onChange={handleName}
							placeholder={`${user.displayName}`}
							className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
						/>
					</div>
					<div className="text-left">
						<label htmlFor="photoURL" className="text-sm ">
							Photo URL
						</label>
						<input
							type="text"
							name="photoURL"
							onChange={handlePic}
							placeholder={`${user.photoURL}`}
							className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
						/>
					</div>
					<div className="modal-action">
						<label
							onClick={handleUpdateUserProfile}
							htmlFor="my-modal"
							className="btn btn-wide mx-auto mt-4 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
							Update Profile
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserInfoModal;

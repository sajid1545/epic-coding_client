import React, { createContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	GithubAuthProvider,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import app from './../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	const githubProvider = new GithubAuthProvider();
	const googleProvider = new GoogleAuthProvider();

	// create user

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// update user profile
	const updateUserProfile = (profile) => {
		setLoading(true);
		return updateProfile(auth.currentUser, profile);
	};

	// signIn
	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// login using github
	const githubSignIn = () => {
		setLoading(true);

		return signInWithPopup(auth, githubProvider);
	};

	// login using google

	const googleSignIn = () => {
		setLoading(true);

		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	const forgotPassword = (email) => {
		setLoading(true);
		return sendPasswordResetEmail(auth, email);
	};

	const deleteUser = () => {
		return deleteUser(auth.currentUser);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log('currentUser', currentUser);
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		createUser,
		user,
		updateUserProfile,
		signIn,
		logOut,
		githubSignIn,
		googleSignIn,
		loading,
		setLoading,
		forgotPassword,
		deleteUser
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContextProvider;

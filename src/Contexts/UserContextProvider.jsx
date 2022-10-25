import React, { createContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	GithubAuthProvider,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import app from './../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const githubProvider = new GithubAuthProvider();
	const googleProvider = new GoogleAuthProvider();

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = (profile) => {
		return updateProfile(auth.currentUser, profile);
	};

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log('currentUser', currentUser);
			setUser(currentUser);
		});

		return () => {
			unsubscribe();
		};
	});

	const githubSignIn = () => {
		return signInWithPopup(auth, githubProvider);
	};

	const logOut = () => {
		return signOut(auth);
	};

	const authInfo = { createUser, user, updateUserProfile, signIn, logOut, githubSignIn };

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContextProvider;

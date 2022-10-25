import { createBrowserRouter } from 'react-router-dom';
import Main from './../Layout/Main';
import Home from './../Pages/Home/Home';
import Courses from './../Pages/Courses/Courses';
import CourseDetails from './../Pages/CourseDetails/CourseDetails';
import CheckOutCourse from './../Pages/CheckOutCourse/CheckOutCourse';
import Register from './../Pages/Auth/Register/Register';
import Login from './../Pages/Auth/Login/Login';
import FAQ from './../Pages/FAQ/FAQ';
import Blogs from './../Pages/Blogs/Blogs';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/courses',
				element: <Courses />,
			},
			{
				path: '/courses/:id',
				element: <CourseDetails />,
			},
			{
				path: '/checkOut',
				element: <CheckOutCourse />,
			},
			{
				path: '/FAQ',
				element: <FAQ />,
			},
			{
				path: '/blogs',
				element: <Blogs />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/login',
				element: <Login />,
			},
		],
	},
]);

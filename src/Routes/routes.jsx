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
import PrivateRoutes from './PrivateRoutes';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import UserProfile from '../Pages/UserProfile/UserProfile';
import Map from '../Components/Map/Map';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
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
				loader: ({ params }) => fetch(`https://epic-coding-server.vercel.app/courses/${params.id}`),
			},
			{
				path: '/checkOut/:id',
				element: (
					<PrivateRoutes>
						<CheckOutCourse />
					</PrivateRoutes>
				),
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
			{
				path: '/user-profile',
				element: (
					<PrivateRoutes>
						<UserProfile />
					</PrivateRoutes>
				),
			},
			{
				path: '/map',
				element: <Map />,
			},
		],
	},
]);

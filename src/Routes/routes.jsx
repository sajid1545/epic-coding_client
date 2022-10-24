import { createBrowserRouter } from 'react-router-dom';
import Main from './../Layout/Main';
import Home from './../Pages/Home/Home';
import Courses from './../Pages/Courses/Courses';
import CourseDetails from './../Pages/CourseDetails/CourseDetails';

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
		],
	},
]);

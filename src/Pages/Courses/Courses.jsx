import React, { useContext } from 'react';
// import LeftNav from '../../Components/RightNav/RightNav';
// import RightNav from '../../Components/LeftNav/LeftNav';
import { CourseContext } from './../../Contexts/CourseProvider';
import RightNav from './../../Components/RightNav/RightNav';
import LeftNav from './../../Components/LeftNav/LeftNav';

const Courses = () => {
	const { courses, handleSelectedCourse } = useContext(CourseContext);

	return (
		<div className="grid grid-cols-12 gap-5 mt-5">
			<div className="right-side lg:col-span-4 col-span-12">
				<h2 className="text-3xl font-bold my-4">Course Titles</h2>
				<div className="space-y-5">
					{courses.map((course) => (
						<LeftNav key={course.id} course={course} handleSelectedCourse={handleSelectedCourse} />
					))}
				</div>
			</div>

			<div className="left-side lg:col-span-8 col-span-12">
				<h1 className="text-4xl font-bold">Total Available Courses : {courses.length} </h1>

				<div className="grid lg:grid-cols-2 grid-cols-1 gap-8 my-5">
					{courses.map((course) => (
						<RightNav key={course.id} course={course} handleSelectedCourse={handleSelectedCourse} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Courses;

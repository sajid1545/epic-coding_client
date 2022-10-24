import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';

const Courses = () => {

    const courses = useLoaderData()
    console.log(courses);

    const [selectedCourse,setSelectedCourse] = useState([])


    // const handlSelectedCourse = (selectedCourse) => {
        
    // }

    return (
        <div className='grid grid-cols-12'>
            {/* {
                courses.map
            } */}

            <div className='right-side lg:col-span-3'>
               {
                    courses.map(course => <Link key={course.id}>
                        <p>{ course.ratings }</p>
                    </Link>)
            }
            </div>

            <div className='left-side lg:col-span-9'>
                    <LeftSideNav/>
            </div>
        </div>
    );
};

export default Courses;
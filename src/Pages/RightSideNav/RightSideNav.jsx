import React from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = ({course}) => {
    return (
        <div>
            <Link>
                <button className='px-8 py-2 bg-gray-400 mb-4 rounded-lg text-lg'>{ course.title }</button>
            </Link>
        </div>
    );
};

export default RightSideNav;
import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const LargeLoader = () => {
	return (
		<div className='flex items-center justify-center h-screen'>
			<BallTriangle
				height={300}
				width={300}
				radius={5}
				color="#111827"
				ariaLabel="ball-triangle-loading"
				wrapperClass={{}}
				wrapperStyle=""
				visible={true}
			/>
		</div>
	);
};

export default LargeLoader;

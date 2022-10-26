import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import h1 from '../../assets/online-1-min.jpg';
import h2 from '../../assets/online-2-min.jpg';
import h3 from '../../assets/online-3-min.jpg';
import h4 from '../../assets/online-4-min.jpg';

import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
	return (
		<div className="p-0 md:p-28  rounded mx-auto">
			<AutoplaySlider
				animation="cubeAnimation"
				play={true}
				cancelOnInteraction={false}
				interval={5000}>
				<div data-src={h1} />
				<div data-src={h2} />
				<div data-src={h3} />
				<div data-src={h4} />
			</AutoplaySlider>
		</div>
	);
};

export default Slider;

import React from 'react';
import service1 from '../../assets/home-1.jpg';
import service2 from '../../assets/home-2.jpg';
import service3 from '../../assets/home-3.jpg';

const OurServices = () => {
	return (
		<div className="max-w-[1200px] mx-auto my-10 gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
			<div className="card rounded-none  ">
				<figure className="p-4 ">
					<img src={service1} alt="Services" className="rounded-tr-3xl rounded-bl-3xl h-[350px]" />
				</figure>
				<div className="card-body text-center md:text-left">
					<h2 className="font-bold text-3xl">Build Skills</h2>
					<p>
						When done right, skills development can reduce un- and underemployment, increase
						productivity, and improve standards of living. Helping people develop and update their
						skills makes economic sense
					</p>
				</div>
			</div>
			<div className="card rounded-none  ">
				<figure className="p-4 ">
					<img src={service3} alt="Services" className="rounded-tr-3xl rounded-bl-3xl h-[350px]" />
				</figure>
				<div className="card-body text-center md:text-left">
					<h2 className="font-bold text-3xl">Free Classes</h2>
					<p>
						Epic! Coding offers 2584 Free Online courses from top universities and companies to help
						you start or advance your career skills in Free Online.
					</p>
				</div>
			</div>
			<div className="card rounded-none  ">
				<figure className="p-4 ">
					<img src={service1} alt="Services" className="rounded-tr-3xl rounded-bl-3xl h-[350px]" />
				</figure>
				<div className="card-body text-center md:text-left">
					<h2 className="font-bold text-3xl">Course Methodology</h2>
					<p>
						Each key process that is to be included in a course should have a corresponding
						methodology that is identified or developed. A methodology explicitly models those
						practices that are essential for a novice to learn, and shows how the process is
						practiced by experts.
					</p>
				</div>
			</div>
		</div>
	);
};

export default OurServices;

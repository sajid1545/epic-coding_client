import React from 'react';

const FAQ = () => {
	return (
		<div>
			<section className="bg-gray-800 text-gray-100 min-h-screen">
				<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
					
					<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
						Frequently Asked Questions
					</h2>
					<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
						<div>
							<h3 className="font-semibold">Is there any way to preview a course?</h3>
							<p className="mt-1 text-gray-400">
								Yes! Learn how to preview a course, and review key information about it. This
								article outlines how you can search Epic! Coding ever-growing library, and find
								courses you’re interested in taking.
							</p>
						</div>
						<div>
							<h3 className="font-semibold">
								I just find it hard to understand X technology/programming language.
							</h3>
							<p className="mt-1 text-gray-400">
								It's okay and happens when you don't have much knowledge because there is a lot to
								know. Distinguish what exact things you don't understand. Read a theory from
								multiple resources about a specific topic you picked out. Do exercises by coding
								some stuff to solidify the knowledge. Don't skip practice. After you practiced one
								thing and you feel you understand it, do the same for the other things you have a
								hard time acknowledging.
							</p>
						</div>
						<div>
							<h3 className="font-semibold">
								Why technology is important? And why should I do courses based on Information
								Technology
							</h3>
							<p className="mt-1 text-gray-400">
								Technology is essential to work, communicate, and survive. The coronavirus epidemic
								was another example of this. During this pandemic, when everyone was stuck at home,
								technology helped a lot to do remote work, entertainment, and relieve stress.
							</p>
						</div>
						<div>
							<h3 className="font-semibold">
								{' '}
								Should I be a genius(mathematician, doctor, magician) to understand programming?
							</h3>
							<p className="mt-1 text-gray-400">
								No. If you have some sort of a computer, spare time, and a desire, you have more
								than enough. A lot of people doing programming who didn't finish school, college,
								university or courses.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default FAQ;
